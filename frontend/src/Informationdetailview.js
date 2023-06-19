import React from "react";
import './Equipmentdetailview.css';
import axios from 'axios';

const Informationdetailview = ({ user_id, baseurl, setisdetailvalue, setdetailevalue, isdetailValue, detailvalue }) => {
    const switchisdetailValue = () => {
        setisdetailvalue(false);
    };

    const deletedata = async () => {
        try {
            await axios.delete(`${baseurl}/information/${detailvalue['id']}`);
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
                        <td>title</td>
                        <td>{detailvalue['title']}</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>{detailvalue['content']}</td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td><a href={detailvalue['url']}>{detailvalue['url']}</a></td>
                    </tr>
                    <tr>
                        <td>created_at</td>
                        <td>{detailvalue['created_at']}</td>
                    </tr>
                    <tr>
                        <td>created_by</td>
                        <td>{detailvalue['created_by']}</td>
                    </tr>
                </tbody>
            </table>
            <div className="card-body">
                <a className="btn btn-success btn-icon-split" onClick={switchisdetailValue}>
                    <span className="icon text-white-50">
                        <i className="fas fa-solid fa-list"></i>
                    </span>
                    <span className="text">リストに戻る</span>
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

export default Informationdetailview;