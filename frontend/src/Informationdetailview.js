import React from "react";
import './Equipmentdetailview.css';
import axios from 'axios';

const Informationdetailview = ({ user_id, baseurl, setisdetailvalue, setdetailevalue, isdetailValue, detailvalue }) => {
    const switchisdetailValue = () => {
        setisdetailvalue(false);
    };

    // const deletedata = async () => {
    //     try {
    //         await axios.delete(`${baseurl}/equipment/${detailvalue['id']}`);
    //         setisdetailvalue(false);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
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
            <div className="flexbox">
                <button type="button" className="btn btn-primary listbutton" onClick={switchisdetailValue}>list</button>
                {/* <button type="button" className="btn btn-danger deletebutton" onClick={deletedata}>delete</button> */}
                <button type="button" className="btn btn-danger deletebutton">delete</button>
            </div>
        </>
    );
};

export default Informationdetailview;