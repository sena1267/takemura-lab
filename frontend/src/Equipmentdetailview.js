import React from "react";
import './Equipmentdetailview.css';
import axios from 'axios';

const Equipmentdetailview = ({ baseurl, isdetailValue, setisdetailvalue, setdetailevalue, detailvalue }) => {
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
                        <td>buyer_id</td>
                        <td>{detailvalue['buyer_id']}</td>
                    </tr>
                    <tr>
                        <td>bought_date</td>
                        <td>{detailvalue['bought_date']}</td>
                    </tr>
                </tbody>
            </table>
            <div className="card-body">
                <a className="btn btn-success btn-icon-split" onClick={switchisdetailValue}>
                    <span className="icon text-white-50">
                        <i className="fas fa-check"></i>
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
                        <i className="fas fa-check"></i>
                    </span>
                    <span className="text">削除</span>
                </a>
            </div>
        </>
    );
};

export default Equipmentdetailview;