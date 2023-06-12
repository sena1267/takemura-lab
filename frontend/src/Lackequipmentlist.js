import React from "react";
import "./Equipmentlistcontent.css";
import axios from 'axios';
import { useState } from "react";
import './Equipmentlistcontent.css';
import Equipmentlacklistcontent from './Equipmentlacklistcontent';

const Lackequipmentlist = ({ switchlack, user_id, baseurl, setswitchlack }) => {
    const initialValues = { bihinmei: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postlackequipmentdata(formValues);
    };

    const postlackequipmentdata = async (values) => {
        if (values.bihinmei) {
            const postdata = { "name": values.bihinmei };
            console.log(postdata);
            console.log(`${baseurl}/equipment/`);
            axios.post(`${baseurl}/equipment/lack/`, postdata).then((response) => {
                console.log(response.data);
                setMessage("");
                setswitchlack(true);
            })
                .catch((error) => {
                    setMessage('エラーが発生しました(idの確認)')
                })
        } else {
            setMessage('入力が完了していません');
        }

    };
    if (switchlack == true) {
        return (
            <>
                <Equipmentlacklistcontent user_id={user_id} baseurl={baseurl} />
            </>
        );
    } else {
        return (
            <>
                <form action=''>
                    <h3 className='text-primary'>不足備品追加フォーム</h3>
                    <input type='text' placeholder='備品名' name='bihinmei' required onChange={(e) => handleChange(e)}></input>
                    <p className='formmessage'>{message}</p>
                    <button className="contentbutton" onClick={(e) => handleSubmit(e)}>add</button>
                </form>
            </>
        );
    };
};

export default Lackequipmentlist;