import React from 'react';
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './Dashboardview.css';
import { useNavigate } from "react-router-dom";
import Atofficechange from "./App";

const Navigate = ({ setisHomeValues, showNavigateValues, setshowNavigateValues, user_id, isAdmin, setisAdminView }) => {
    // この関数が呼び出されるとホーム画面が呼び出される
    const trueHome = () => {
        // データの取得
        setisHomeValues(true);
        setisAdminView(false);
    };

    // この関数が呼び出されると備品管理画面が表示される
    const falseHome = () => {
        setisHomeValues(false);
        setisAdminView(false);
    };

    const trueisAdminview = () => {
        setisHomeValues(false);
        setisAdminView(true);
    };

    const hideNavigate = () => {
        setshowNavigateValues(false);
    };
    const navigate = useNavigate();

    const movepage = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('T-lab_username');
        navigate('/login')
    };

    const switchatoffice = () => {
        navigate('/atofficechange/' + user_id)
    }

    if (showNavigateValues == true) {
        if (isAdmin == false) {
            return (
                <>
                    {/* <!-- Sidebar --> */}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        {/* <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">LabLink</div>
                        </a>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">
                            menu
                        </div>
                        {/* ホーム画面を呼び出すか備品管理画面を呼び出すかの管理を行うタブバー */}
                        <div className="font-japanese">
                            <li className="nav-item">
                                <a className="nav-link" onClick={trueHome}>
                                    <i className="fas fa-fw fa-home"></i>
                                    <span>ホーム</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={falseHome}>
                                    <i className="fas fa-fw fa-list"></i>
                                    <span>備品管理</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={switchatoffice}>
                                    <i className="fas fa-solid fa-person-booth"></i>
                                    <span>在室スイッチ</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='https://drive.google.com/drive/folders/1EKs5oNzoV-NupyrZo-RQHkTnqeuJKXba?usp=sharing'>
                                    <i className="fas fa-regular fa-image"></i>
                                    <span>思い出</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={movepage}>
                                    <i className="fas fa-solid fa-user"></i>
                                    <span>ログアウト</span></a>
                            </li>
                        </div>
                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />
                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        <div className="text-center d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={hideNavigate}></button>
                        </div>
                    </ul>
                    {/* <!-- End of Sidebar --> */}
                </>
            );
        } else {
            return (
                <>
                    {/* <!-- Sidebar --> */}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        {/* <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Lab Link</div>
                        </a>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">
                            menu
                        </div>
                        {/* ホーム画面を呼び出すか備品管理画面を呼び出すかの管理を行うタブバー */}
                        <div className="font-japanese">
                            <li className="nav-item">
                                <a className="nav-link" onClick={trueHome}>
                                    <i className="fas fa-fw fa-home"></i>
                                    <span>ホーム</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={falseHome}>
                                    <i className="fas fa-fw fa-list"></i>
                                    <span>備品管理</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={switchatoffice}>
                                    <i className="fas fa-solid fa-person-booth"></i>
                                    <span>在室スイッチ</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='https://drive.google.com/drive/folders/1EKs5oNzoV-NupyrZo-RQHkTnqeuJKXba?usp=sharing'>
                                    <i className="fas fa-regular fa-image"></i>
                                    <span>思い出</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={movepage}>
                                    <i className="fas fa-solid fa-user"></i>
                                    <span>ログアウト</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={trueisAdminview}>
                                    <i className="fas fa-solid fa-wrench"></i>
                                    <span>管理者ページ</span></a>
                            </li>
                        </div>
                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />
                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        <div className="text-center d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={hideNavigate}></button>
                        </div>
                    </ul>
                    {/* <!-- End of Sidebar --> */}
                </>
            );
        }
    } else {

    };
}

export default Navigate;