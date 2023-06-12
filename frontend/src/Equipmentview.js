import React from "react";
import Equipmentviewswitch from "./Equipmentviewswitch";
import "./Equipmentlistcontent.css";
import { useState } from "react";
import Lackequipmentlist from './Lackequipmentlist';

const Equipmentview = ({ user_id, baseurl }) => {
    const [switchview, setswitchview] = useState(true);
    const [switchlack, setswitchlack] = useState(true);

    const toggleswitchview = () => {
        if (switchview == true) {
            setswitchview(false);
        } else {
            setswitchview(true);
        }
    };

    const toggleswitchlack = () => {
        if (switchlack == true) {
            setswitchlack(false);
        } else {
            setswitchlack(true);
        }
    }

    return (
        <>
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 font-japanese">
                                            今月支払い分</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">￥40,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1 font-japanese">
                                            総備品コスト</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">￥215,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1 font-japanese">
                                            会計受け取り金額</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">￥215,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Pending Requests Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 font-japanese">
                                            会計余剰金
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">￥215,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Content Row --> */}

                <div className="row">

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary font-japanese">研究室内備品リスト</h6>
                                <button type="button" className="btn btn-primary font-japanese" onClick={toggleswitchview}>画面切り替え</button>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area scroll">
                                    <Equipmentviewswitch switchview={switchview} user_id={user_id} baseurl={baseurl} setswitchview={setswitchview} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary font-japanese">研究室内不足備品リスト</h6>
                                <button type="button" className="btn btn-primary font-japanese" onClick={toggleswitchlack}>画面切り替え</button>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-pie pt-4 pb-2 scroll">
                                    <Lackequipmentlist switchlack={switchlack} user_id={user_id} baseurl={baseurl} setswitchlack={setswitchlack} />
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
