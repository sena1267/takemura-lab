import React from "react";
import './Equipmentdetailview.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Equipmentdetailview = ({ baseurl, isdetailValue, setisdetailvalue, setdetailevalue, detailvalue }) => {
    const [username, setusername] = useState('');
    const switchisdetailValue = () => {
        setisdetailvalue(false);
    };

    const deletedata = async () => {
        try {
            await axios.delete(`${baseurl}/equipment/${detailvalue['id']}`);
            setisdetailvalue(false);
        } catch (error) {
            console.error(error);
        }
    };

    const finishequipment = async () => {
        const postdata = {
            "name": detailvalue['name'],
            "price": detailvalue['price'],
            "buyer_id": detailvalue['buyer_id'],
            "bought_date": detailvalue['bought_date']
        }
        try {
            await axios.post(`${baseurl}/equipment/history/`, postdata).then(res => {
                axios.delete(`${baseurl}/equipment/${detailvalue['id']}`).then(res => {
                    setisdetailvalue(false);
                })
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        async function getusername() {
            try {
                await axios.get(`${baseurl}/user/get_user/${detailvalue['created_by']}`).then(res => {
                    console.log(res.data.name);
                    setusername(res.data.name);
                })
            } catch (error) {
                console.error(error);
            }
        };
        getusername();
    }, [])

    return (
        <>
            <table className='font-japanese'>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td>{detailvalue['name']}</td>
                    </tr>
                    <tr>
                        <td>price</td>
                        <td>{detailvalue['price']}</td>
                    </tr>
                    <tr>
                        <td>buyer</td>
                        <td>{username}</td>
                    </tr>
                    <tr>
                        <td>bought_date</td>
                        <td>{detailvalue['bought_date']}</td>
                    </tr>
                </tbody>
            </table>
            <div className="card-body">
                <a className="btn btn-primary btn-icon-split" onClick={switchisdetailValue}>
                    <span className="icon text-white-50">
                        <i className="fas fa-solid fa-list"></i>
                    </span>
                    <span className="text">リストに戻る</span>
                </a>
            </div>
            <div className="card-body">
                <a className="btn btn-success btn-icon-split" onClick={finishequipment}>
                    <span className="icon text-white-50">
                        <i className="fas fa-check"></i>
                    </span>
                    <span className="text">備品使い切り</span>
                </a>
            </div>
            <div className="card-body">
                <a className="btn btn-danger btn-icon-split" onClick={deletedata}>
                    <span className="icon text-white-50">
                        <i className="fas fa-trash"></i>
                    </span>
                    <span className="text">削除</span>
                </a>
            </div>
        </>
    );
};

export default Equipmentdetailview;
