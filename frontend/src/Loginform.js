import "./Loginform.css";
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
    //ユーザー情報を格納するオブジェクトを生成する
    const initialValues = {username: "", password: ""};
    //フォームに入力された値を格納する状態変数を準備する
    const [formValues, setFormValues] = useState(initialValues);
    //エラーメッセージを格納するためのオブジェクト
    const [formErrors, setFormErrors] = useState({})
    //ログインボタンが押されたかどうかを判別するオブジェクト
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();
    //フォームに入力された値を取り出す関数
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormValues({...formValues, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //ログイン情報を発信する。
        //バリデーションチェックする
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setFormValues({});
    };

    const validate = (values) => {
        const errors = {};
        if (!values.username){
            errors.username = "ユーザー名を入力してください";
        }
        if(!values.password){
            errors.password = "パスワードを入力してください";
        };
        return errors;
    };
    return (
        <div>
            <div class="card-login">
            <div class="content-login">
                <h2>T-Lab</h2>
                <h3>LOGIN</h3>
                <div class="usernameform">
                    <label>username</label>
                    <input type="text" placeholder="username" name="username" onChange={(e) => handleChange(e)}/>
                </div>
                <p>{formErrors.username}</p>
                <div class="passwordform">
                    <label>password</label>
                    <input type="text" placeholder="password" name="password" onChange={(e) => handleChange(e)}/>
                </div>
                <p class="errorMsg">{formErrors.password}</p>
                {/* <button class="submitButton" onClick={(e) => handleSubmit(e)}>login</button> */}
                <button onClick={()=>navigate('/dashboard/1')}>login</button>
            </div>
            </div>
            </div>
    );
};

export default Loginform;