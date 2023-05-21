import React from "react";
//URLを定義する場所を指定するためのインポート
import { Routes, Route, Link, useParams } from "react-router-dom";
import './App.css';
import Loginform from "./Loginform"
import Dashboardroot from "./Dashboardroot";

const App = () => {
  return (
    //BrouserRouterの中にURLを定義します。
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
//Appをエクスポートします。
export default App;

//ユーザーが最初にアクセスする画面です。
const Home = () => {
  return (
    <>
      <div class="container text-center mt-5">
        <header>
          <div class="textarea">
            <h1 class="wow animate__animated animate__fadeInUp">Takemura Lab</h1>
            <p>　</p>
            <p><Link to="/login" class="button" role="button">ログイン</Link></p>
          </div>
          <div class="image-area">
            <img class="image" src="./img/home_background1.jpg" alt='武村研究室のログイン画面の背景画像' />
          </div>
        </header>
      </div>
    </>
  );
};

//ユーザーログインのフォームです。
const Login = () => {
  return (
    <div>
      <Loginform />
    </div>
  );
};

//ユーザーのダッシュボードです。
const Dashboard = () => {
  const params = useParams();
  const user_id = params.id;
  return (
    <div>
      {/* dashboardにuser_idを渡す */}
      <Dashboardroot user_id={user_id} />
    </div>
  );

};

const NotFound = () => {

}
