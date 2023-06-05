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
            <div className="flexbox">
                <button type="button" className="btn btn-primary listbutton" onClick={switchisdetailValue}>list</button>
                <button type="button" className="btn btn-danger deletebutton" onClick={deletedata}>delete</button>
            </div>
        </>
    );
};

export default Equipmentdetailview;