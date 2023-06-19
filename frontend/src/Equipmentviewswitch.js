import React from "react";
import Equipmentlistcontent from './Equipmentlistcontent';
import './Equipmentlistcontent.css';
import { useState } from "react";
import axios from 'axios';
import Equipmentdetailview from './Equipmentdetailview';

const Equipmentviewswitch = ({ switchview, user_id, baseurl, setswitchview }) => {
    const initialValues = { bihinmei: "", cost: 0, buyer: 0, bought_data: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [message, setMessage] = useState('');
    // 備品の詳細情報の表示を制御するためのスイッチ
    const [isdetailValue, setisdetailvalue] = useState(false);
    // 商品の詳細情報を管理するjson形式の状態変数
    const [detailvalue, setdetailevalue] = useState({ 'id': 0, 'name': '', 'price': 0, 'buyer_id': 0, 'bought_date': '' });
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
        setIsSubmit(true);
        await postEquipmentdata(formValues);
    };

    const postEquipmentdata = async (values) => {
        if (values.bihinmei && values.cost) {
            const postdata = { "name": values.bihinmei, "price": parseInt(values.cost), "buyer_id": parseInt(user_id), "bought_date": state.curDT };
            console.log(postdata);
            console.log(`${baseurl}/equipment/`);
            axios.post(`${baseurl}/equipment/`, postdata).then((response) => {
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
                    <Equipmentlistcontent user_id={user_id} baseurl={baseurl} setisdetailvalue={setisdetailvalue} setdetailevalue={setdetailevalue} />
                </>
            );
        } else {
            return (
                <>
                    <Equipmentdetailview baseurl={baseurl} isdetailValue={isdetailValue} setisdetailvalue={setisdetailvalue} setdetailevalue={setdetailevalue} detailvalue={detailvalue} />
                </>
            )
        }
    } else {
        return (
            <>
                <form action=''>
                    <h3 className='text-primary'>備品追加フォーム</h3>
                    <input type='text' placeholder='備品名' name='bihinmei' required onChange={(e) => handleChange(e)}></input>
                    <input type='number' placeholder='コスト' name='cost' required onChange={(e) => handleChange(e)}></input>
                    <p className='formmessage'>{message}</p>
                    <button className="contentbutton" onClick={(e) => handleSubmit(e)}>add</button>
                </form>
            </>
        );
    };
}

export default Equipmentviewswitch;