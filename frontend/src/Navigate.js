import React from 'react';
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './Dashboardview.css';

const Navigate = ({ setisHomeValues, showNavigateValues, setshowNavigateValues }) => {
    // この関数が呼び出されるとホーム画面が呼び出される
    const trueHome = () => {
        // データの取得
        setisHomeValues(true);
    };

    // この関数が呼び出されると備品管理画面が表示される
    const falseHome = () => {
        setisHomeValues(false);
    };

    const hideNavigate = () => {
        setshowNavigateValues(false);
    };

    if (showNavigateValues === true) {
        return (
            <>
                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    {/* <!-- Sidebar - Brand --> */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Takemura Lab</div>
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

    };
}

export default Navigate;