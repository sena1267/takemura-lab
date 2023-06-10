import "./Loginform.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';

const Loginform = () => {
    //ユーザー情報を格納するオブジェクトを生成する
    const initialValues = { username: "", password: "" };
    //フォームに入力された値を格納する状態変数を準備する
    const [formValues, setFormValues] = useState(initialValues);
    //エラーメッセージを格納するためのオブジェクト
    const [formErrors, setFormErrors] = useState({})
    //ログインボタンが押されたかどうかを判別するオブジェクト
    const [isSubmit, setIsSubmit] = useState(false);
    //ログイン状態を判別するステート
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const navigate = useNavigate();

    //ログイン情報をサーバーに送信し、アクセストークンを取得する関数
    async function login(username, password) {
        const response = await axios.post('http://127.0.0.1:8080/token', qs.stringify({
            "username": username,
            "password": password,
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const { access_token } = response.data;
        return access_token;
    };

    //アクセストークンをローカルストレージに保存する関数
    function saveToken(token) {
        localStorage.setItem('access_token', token);
    }

    async function getUserId(username) {
        try {
            const response = await axios.get('http://127.0.0.1:8080/user/');
            const users = response.data;

            const user = users.find(user => user.name === username);

            if (user) {
                return user.id;
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    }

    //フォームに入力された値を取り出す関数
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //バリデーションチェックする
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setFormValues({});
        //エラーメッセージがなければログイン情報を発信する。
        if (Object.keys(formErrors).length === 0) {
            const token = await login(formValues.username, formValues.password);
            saveToken(token);
            setIsLoggedIn(true);
            getUserId(formValues.username).then(id => {
                if (id) {
                    console.log(`User ID is: ${id}`);
                    navigate('/dashboard/' + id.toString());
                } else {
                    console.log('No user with the name "string" was found.');
                }
            });
        };
    }

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "ユーザー名を入力してください";
        }
        if (!values.password) {
            errors.password = "パスワードを入力してください";
        };
        return errors;
    };

    // ページロード時に既存のトークンをチェック
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div class="log">
            <div class="loginform-background">
                <div class="card-login">
                    <div class="content-login">
                        <h2>T-Lab</h2>
                        <h3>LOGIN</h3>
                        <div class="usernameform">
                            <label>username</label>
                            <input type="text" placeholder="username" name="username" onChange={(e) => handleChange(e)} />
                        </div>
                        <p>{formErrors.username}</p>
                        <div class="passwordform">
                            <label>password</label>
                            <input type="text" placeholder="password" name="password" onChange={(e) => handleChange(e)} />
                        </div>
                        <p className="errorMsg">{formErrors.password}</p>
                        {/* <button class="submitButton" onClick={(e) => handleSubmit(e)}>login</button> */}
                        <button onClick={(e) => handleSubmit(e)}>login</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Loginform;