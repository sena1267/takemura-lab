// ホーム画面の内容の定義
import React from "react";
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './Dashboardview.css';

const Dashboardview = ({ user_id }) => {
    return (
        <>
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
        </>
    );
};

export default Dashboardview;