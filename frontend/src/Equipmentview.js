import React from "react";

const Equipmentview = () => {
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
            </div>
        </>
    );
}

export default Equipmentview;
