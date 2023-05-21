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
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    {/* <!-- Sidebar - Brand --> */}
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">Takemura Lab</div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr class="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}
                    <li class="nav-item active">
                        <a class="nav-link">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr class="sidebar-divider" />

                    {/* <!-- Heading --> */}
                    <div class="sidebar-heading">
                        menu
                    </div>

                    {/* <!-- Nav Item - Charts --> */}
                    {/* <li class="nav-item">
                            <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-home"></i>
                                <span>home</span></a>
                        </li> */}
                    {/* ホーム画面を呼び出すか備品管理画面を呼び出すかの管理を行うタブバー */}
                    <div class="font-japanese">
                        <li class="nav-item">
                            <a class="nav-link" onClick={trueHome}>
                                <i class="fas fa-fw fa-home"></i>
                                <span>ホーム</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={falseHome}>
                                <i class="fas fa-fw fa-list"></i>
                                <span>備品管理</span></a>
                        </li>
                    </div>
                    {/* <!-- Divider --> */}
                    <hr class="sidebar-divider" />
                    {/* <!-- Sidebar Toggler (Sidebar) --> */}
                    {/* <div class="text-center d-none d-md-inline">
                        <button class="rounded-circle border-0" id="sidebarToggle" onClick={hideNavigate}></button>
                    </div> */}
                    <div class="text-center d-md-inline">
                        <button class="rounded-circle border-0" id="sidebarToggle" onClick={hideNavigate}></button>
                    </div>
                </ul>
                {/* <!-- End of Sidebar --> */}
            </>
        );
    } else {

    };
}

export default Navigate;