import React from "react";
//URLを定義する場所を指定するためのインポート
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import './App.css';
import Loginform from "./Loginform"
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
      //BrouserRouterの中にURLを定義します。
      <AnimatePresence>
        <div class="container text-center mt-5">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </AnimatePresence>
  );
}
//Appをエクスポートします。
export default App;

//ユーザーが最初にアクセスする画面です。
const Home = () => {
  return (
    <>
    <header>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
      <div class="textarea">
        <h1>Takemura Lab</h1>
        <p>　</p>
        <p><Link to="/login" class="button" role="button">ログイン</Link></p>
      </div>
      <div class="image-area">
        <img class="image" src="./img/home_background1.jpg" />
      </div>
      </motion.div>
    </header>
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
  return (
    <div><p>{params.id}</p></div>
  );

};

const NotFound = () => {

}
