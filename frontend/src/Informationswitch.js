import React from "react";
import { useState } from "react";
import axios from 'axios';
import Informationdetailview from "./Informationdetailview";
import Informationlistcontent from "./Informationlistcontent";


const Informationswitch = ({ switchview, setswitchview, user_id, baseurl }) => {
    const initialValues = { title: "", content: "", url: "", created_at: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [message, setMessage] = useState('');
    // newsの詳細情報の表示を制御するためのスイッチ
    const [isdetailValue, setisdetailvalue] = useState(false);
    // newsの詳細情報を管理するjson形式の状態変数
    const [detailvalue, setdetailevalue] = useState({ 'id': 0, 'title': '', 'content': 0, 'url': 0, 'created_at': '', "created_by": 0 });
    const state = {
        curDT: new Date().toISOString(),
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postEquipmentdata(formValues);
    };

    const postEquipmentdata = async (values) => {
        if (values.title && values.content && values.url) {
            const postdata = { "title": values.title, "content": values.content, "url": values.url, "created_at": state.curDT, "created_by": user_id };
            console.log(postdata);
            console.log(`${baseurl}/information/`);
            axios.post(`${baseurl}/information/`, postdata).then((response) => {
                console.log(response.data);
                setMessage("");
                setswitchview(true);
            })
                .catch((error) => {
                    setMessage('エラーが発生しました(idの確認)')
                })
        } else {
            setMessage('入力が完了していません');
        }

    };

    if (switchview == true) {
        if (isdetailValue == false) {
            return (
                <>
                    <Informationlistcontent user_id={user_id} baseurl={baseurl} setisdetailvalue={setisdetailvalue} setdetailevalue={setdetailevalue} />
                </>
            );
        } else {
            return (
                <>
                    <Informationdetailview baseurl={baseurl} isdetailValue={isdetailValue} setisdetailvalue={setisdetailvalue} setdetailevalue={setdetailevalue} detailvalue={detailvalue} />
                </>
            )
        }
    } else {
        return (
            <>
                <form action=''>
                    <h3 className='text-primary'>ニュース作成</h3>
                    <input type='text' placeholder='title' name='title' required onChange={(e) => handleChange(e)}></input>
                    <input type='text' placeholder='content' name='content' required onChange={(e) => handleChange(e)}></input>
                    <input type='text' placeholder='url' name='url' required onChange={(e) => handleChange(e)}></input>
                    <p className='formmessage'>{message}</p>
                    <button className="contentbutton" onClick={(e) => handleSubmit(e)}>add</button>
                </form>
            </>
        );
    }
};

export default Informationswitch;