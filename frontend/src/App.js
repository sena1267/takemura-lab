import React from "react";
//URLを定義する場所を指定するためのインポート
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import './App.css';
import Loginform from "./Loginform"
import Dashboardroot from "./Dashboardroot";
import axios from 'axios';
import { useEffect, useState } from "react";

const App = () => {
  return (
    //BrouserRouterの中にURLを定義します。
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/atofficechange/:id" element={<Atofficechange />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
//Appをエクスポートします。
export default App;

const Home = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isSplashScreenVisible && (
        <div className="splash-screen">
          <img src="/img/takemura-lab-logo.png" alt="武村研究室のロゴ" />
        </div>
      )}

      {!isSplashScreenVisible && (
        <div className="container text-center mt-5">
          <header>
            <div className="textarea">
              <img className='wow animate__animated animate__fadeInUp slow-animation' src="/img/takemura-lab-logo_.png" alt="武村研究室のロゴ" style={{ maxHeight: '100%', maxWidth: '100%' }} />
              <p>　</p>
              <h1>LabLink</h1>
              <p>　</p>
              <strong style={{ color: "black" }}>made by takemura lab</strong>
              <p>　</p>
              <p><Link to="/login" className="button" role="button">ログイン</Link></p>
            </div>
            <div className="image-area"></div>
          </header>
        </div>
      )}
    </>
  );
};
//ユーザーログインのフォームです。
const Login = () => {
  let baseurl = "http://127.0.0.1:8080";
  return (
    <div>
      <Loginform baseurl={baseurl} />
    </div>
  );
};

//ユーザーのダッシュボードです。
const Dashboard = () => {
  const params = useParams();
  const user_id = params.id;
  let baseurl = "http://127.0.0.1:8080";
  return (
    <div>
      {/* dashboardにuser_idを渡す */}
      <Dashboardroot user_id={user_id} baseurl={baseurl} />
    </div>
  );

};


export const Atofficechange = () => {

  const navigate = useNavigate();

  const movepage = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('T-lab_username');
    navigate('/login')
  };


  let baseurl = "http://127.0.0.1:8080";

  useEffect(() => {
    const username = localStorage.getItem('T-lab_username');

    axios.get(baseurl + '/user/').then(res => {
      const user = res.data.find(user => user.name === username);
      if (user) {
        axios.get(baseurl + `/user/get_user/${user.id}`).then(res => {
          const userData = res.data;
          if (userData) {
            const updatedUserData = {
              "name": userData.name,
              "icon": userData.icon,
              "birthday": userData.birthday,
              "is_admin": userData.is_admin,
              "at_office": !userData.at_office, // Toggle at_office value
              "current": userData.current,
              "target": userData.target
            };
            axios.post(baseurl + `/user/update/${user.id}`, updatedUserData)
              .then(res => {
                console.log('User data updated successfully.', res.data);
                navigate('/dashboard/' + user.id);
              })
              .catch(err => {
                console.error('Error updating user data.', err);
                movepage();
              });
          }
        })
          .catch(err => {
            console.error('Error getting user data.', err);
            movepage();
          });
      }
    })
      .catch(err => {
        console.error('Error getting user id.', err);
        movepage();
      });
  }, []);

  return null;
};

const NotFound = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <header>
          <div className="textarea">
            <h1>Not Found</h1>
          </div>
          <div class="image-area">
            <img class="image" src="./img/home_background1.jpg" alt='武村研究室(takemura lab)の背景画像' />
          </div>
        </header>
      </div>
    </>
  );
}

