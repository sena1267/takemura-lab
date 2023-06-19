import "./Loginform.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';

const Loginform = ({ baseurl }) => {
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
        try {
            const response = await axios.post(`${baseurl}/token`, qs.stringify({
                "username": username,
                "password": password,
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const { access_token } = response.data;
            return access_token;
        } catch (error) {
            console.error(error);  // エラーの詳細をログに出力
            return "";  // エラーが発生した場合は空文字を返す
        }
    };

    //アクセストークンをローカルストレージに保存する関数
    function saveToken(token, username) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('T-lab_username', username);
    }

    async function getUserId(username) {
        try {
            const response = await axios.get(`${baseurl}/user/`);
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
        setFormValues(initialValues);
        //エラーメッセージがなければログイン情報を発信する。
        if (Object.keys(formErrors).length === 0) {
            const token = await login(formValues.username, formValues.password);
            if (token != "") {
                saveToken(token, formValues.username);
                setIsLoggedIn(true);
                getUserId(formValues.username).then(id => {
                    if (id) {
                        console.log(`User ID is: ${id}`);
                        navigate('/dashboard/' + id.toString());
                    } else {
                        console.log('No user with the name "string" was found.');
                    }
                });
            } else {
                setFormValues(initialValues);
                setIsSubmit(false);
                setIsLoggedIn(false);

            }
        } else {
            setFormValues(initialValues);
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
        const username = localStorage.getItem('T-lab_username');
        if (token) {
            getUserId(username).then(id => {
                if (id) {
                    console.log(`User ID is: ${id}`);
                    navigate('/dashboard/' + id.toString());
                }
            });
        }
    }, []);

    return (
        <>
            <div class="form-wrapper">
                <h1>Sign In</h1>
                <form>
                    <div class="form-item">
                        <label for="email"></label>
                        <input type="text" name="username" required="required" placeholder="UserName" value={formValues.username} onChange={(e) => handleChange(e)} ></input>
                    </div>
                    <div class="form-item">
                        <label for="password"></label>
                        <input type="password" name="password" required="required" placeholder="Password" value={formValues.password} onChange={(e) => handleChange(e)}></input>
                    </div>
                    <div class="button-panel">
                        <input type="submit" class="button" title="Sign In" value="Sign In" onClick={(e) => handleSubmit(e)}></input>
                    </div>
                </form>
                <div class="form-footer">
                    <p><a href="#">　</a></p>
                    <p><a href="#">　</a></p>
                </div>
            </div>
        </>
    );
};

export default Loginform;