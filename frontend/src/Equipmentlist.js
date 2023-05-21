import React from "react";
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './Dashboardview.css';
import { useNavigate } from "react-router-dom";

const Equipmentlist = ({ user_id }) => {

    const navigate = useNavigate();

    return (
        <>
            {/* <!-- Page Wrapper --> */}
            <div id="page-top">
                <div id="wrapper">

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
                            <a class="nav-link" href="index.html">
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
                        <li class="nav-item">
                            <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-home"></i>
                                <span>home</span></a>
                        </li>

                        {/* <!-- Nav Item - Tables --> */}
                        {/* <div class="font-japanese">
                            <li class="nav-item">
                                <a class="nav-link" href="tables.html">
                                    <i class="fas fa-fw fa-list"></i>
                                    <span>備品管理</span></a>
                            </li>
                        </div> */}
                        <div class="font-japanese">
                            <li class="nav-item">
                                <button class="nav-link" onClick={() => navigate('')}>
                                    <i class="fas fa-fw fa-list"></i>
                                    <span>備品管理</span>
                                </button>
                            </li>
                        </div>
                        {/* <!-- Divider --> */}
                        <hr class="sidebar-divider" />

                    </ul>
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" class="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/* <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                    <i class="fa fa-bars"></i>
                                </button>

                                {/* <!-- Topbar Navbar --> */}
                                <ul class="navbar-nav ml-auto">


                                    <div class="topbar-divider d-none d-sm-block"></div>

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li class="nav-item dropdown no-arrow">
                                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Tatsuma Furuya</span>
                                            {/* <img class="img-profile rounded-circle" */}
                                            {/* src="#" /> */}
                                            <i class="fas fa-solid fa-user fa-2s text-gray-300"></i>
                                        </a>
                                    </li>

                                </ul>

                            </nav>
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div class="container-fluid">

                                {/* <!-- Page Heading --> */}
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                                </div>

                                {/* <!-- Content Row --> */}
                                <div class="row">

                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div class="col-xl-3 col-md-6 mb-4">
                                        <div class="card border-left-primary shadow h-100 py-2">
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 font-japanese">
                                                            今月支払い分</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">￥40,000</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div class="col-xl-3 col-md-6 mb-4">
                                        <div class="card border-left-success shadow h-100 py-2">
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1 font-japanese">
                                                            総備品コスト</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">￥215,000</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div class="col-xl-3 col-md-6 mb-4">
                                        <div class="card border-left-success shadow h-100 py-2">
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1 font-japanese">
                                                            会計受け取り金額</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">￥215,000</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Pending Requests Card Example --> */}
                                    <div class="col-xl-3 col-md-6 mb-4">
                                        <div class="card border-left-success shadow h-100 py-2">
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1 font-japanese">
                                                            会計余剰金
                                                        </div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">￥215,000</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Content Row --> */}

                                <div class="row">

                                    {/* <!-- Area Chart --> */}
                                    <div class="col-xl-8 col-lg-7">
                                        <div class="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-primary font-japanese">研究室内備品リスト</h6>

                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div class="card-body">
                                                <div class="chart-area">
                                                    <canvas id="myAreaChart"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Pie Chart --> */}
                                    <div class="col-xl-4 col-lg-5">
                                        <div class="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-primary font-japanese">研究室内不足備品リスト</h6>
                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div class="card-body">
                                                <div class="chart-pie pt-4 pb-2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Content Row --> */}
                                <div class="row">

                                    {/* <!-- Content Column --> */}
                                    <div class="col-lg-6 mb-4">

                                        {/* <!-- Color System --> */}
                                        <div class="row">
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-secondary text-white shadow">
                                                    <div class="card-body">
                                                        Noriko Takemura
                                                        <div class="text-white-50 small">not office</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-secondary text-white shadow">
                                                    <div class="card-body">
                                                        Ayaka Asaeda
                                                        <div class="text-white-50 small">not office</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-secondary text-white shadow">
                                                    <div class="card-body">
                                                        Shiori Furukiawa
                                                        <div class="text-white-50 small">not office</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-secondary text-white shadow">
                                                    <div class="card-body">
                                                        Tsubasa Esumi
                                                        <div class="text-white-50 small">not office</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-danger text-white shadow">
                                                    <div class="card-body">
                                                        Tatsuma Furuya
                                                        <div class="text-white-50 small">at office</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-secondary text-white shadow">
                                                    <div class="card-body">
                                                        Kouichi Tanaka
                                                        <div class="text-white-50 small">not office</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-secondary text-white shadow">
                                                    <div class="card-body">
                                                        Nanami Hirose
                                                        <div class="text-white-50 small">not office</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-danger text-white shadow">
                                                    <div class="card-body">
                                                        Hitoshi Shimomae
                                                        <div class="text-white-50 small">at office</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <div class="card bg-danger text-white shadow">
                                                    <div class="card-body">
                                                        Riku Yamamoto
                                                        <div class="text-white-50 small">at office</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-lg-6 mb-4">


                                        {/* <!-- Approach --> */}
                                        <div class="card shadow mb-4">
                                            <div class="card-header py-3">
                                                <h6 class="m-0 font-weight-bold text-primary font-japanese">掲示板</h6>
                                            </div>
                                            <div class="card-body">
                                                <p class="">みんな頑張ってて偉いです。(2023.5.16 19:37)</p>
                                                <p class="mb-0">来週の金曜日にミーティングしましょう。(2023.6.19 12:40)</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* <!-- /.container-fluid --> */}

                        </div>
                        {/* <!-- End of Main Content --> */}

                        {/* <!-- Footer --> */}
                        <footer class="sticky-footer bg-white">
                            <div class="container my-auto">
                                <div class="copyright text-center my-auto">
                                    <span>Copyright &copy; Takemura Lab</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>

                {/* <!-- Logout Modal--> */}
                <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a class="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Equipmentlist;