import React from "react";
import Equipmentviewswitch from "./Equipmentviewswitch";
import "./Equipmentlistcontent.css";
import { useState, useEffect } from "react";
import Lackequipmentlist from './Lackequipmentlist';
import axios from 'axios';
import Totalcost from "./Totalcost";
import Remainingmoney from "./Remainingmoney";

const Equipmentview = ({ user_id, baseurl, monthpay }) => {
    const [switchview, setswitchview] = useState(true);
    const [switchlack, setswitchlack] = useState(true);
    const [payduty, setPayduty] = useState(0);
    const [recieveallmoney, setRecieveallmoney] = useState(0);
    const [totalcost, setTotalcost] = useState(null);
    const [remaining, setremaining] = useState(0);

    useEffect(() => {
        const counter = 0;
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseurl}/user/`);
                const users = response.data;
                let tempRecieveallmoney = recieveallmoney;
                let tempPayduty = 0;
                for (const user of users) {
                    tempRecieveallmoney += user.current * monthpay;
                    if (user.id === user_id) {
                        tempPayduty = (user.target - user.current) * monthpay;
                    }
                }
                setRecieveallmoney(tempRecieveallmoney);
                setPayduty(tempPayduty);
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        };
        fetchData();
    }, [user_id, baseurl]);

    useEffect(() => {
        const calctotal = async () => {
            try {
                const equipmentRes = await axios.get(`${baseurl}/equipment/`);
                const equipmentHistoryRes = await axios.get(`${baseurl}/equipment/history/`);

                const equipmentPrices = equipmentRes.data.map(item => item.price);
                const equipmentHistoryPrices = equipmentHistoryRes.data.map(item => item.price);

                const totalCost = [...equipmentPrices, ...equipmentHistoryPrices].reduce((a, b) => a + b, 0);
                setTotalcost(totalCost);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        calctotal();
    }, [baseurl]);

    const remainingcalc = () => {
        setremaining(recieveallmoney - totalcost);
    }
    useEffect(() => {
        remainingcalc();
    }, [totalcost, recieveallmoney]);

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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">￥{payduty}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <Totalcost baseurl={baseurl} setTotalcost={setTotalcost} totalcost={totalcost} />
                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1 font-japanese">
                                            会計受け取り金額</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">￥{recieveallmoney}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Pending Requests Card Example --> */}
                    <Remainingmoney remaining={remaining} />
                </div>

                {/* <!-- Content Row --> */}

                <div className="row">

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary font-japanese mr-1">研究室内備品リスト</h6>
                                <button type="button" className="btn btn-primary font-japanese" onClick={toggleswitchview}>switch</button>
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
                                <h6 className="m-0 font-weight-bold text-primary font-japanese mr-1">研究室内不足備品リスト</h6>
                                <button type="button" className="btn btn-primary font-japanese" onClick={toggleswitchlack}>switch</button>
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
