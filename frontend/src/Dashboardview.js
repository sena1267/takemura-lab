// ホーム画面の内容の定義
import React from "react";
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './Dashboardview.css';
import Members from './Members.js';
import { useState } from "react";
import Informationswitch from './Informationswitch'
import "./Equipmentlistcontent.css";
import { useNavigate } from "react-router-dom";

const Dashboardview = ({ user_id, baseurl }) => {
    const [switchview, setswitchview] = useState(true);
    const navigate = useNavigate();
    const toggleswitchview = () => {
        if (switchview == true) {
            setswitchview(false);
        } else {
            setswitchview(true);
        }
    };

    const switchatoffice = () => {
        navigate('/atofficechange/' + user_id)
    }
    return (
        <>
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                {/* <!-- Content Row --> */}


                {/* <!-- Content Row --> */}
                <div className="row">
                    <div className="card-body">
                        <a className="btn btn-primary btn-icon-split" onClick={switchatoffice}>
                            <span className="text">在室スイッチ</span>
                        </a>
                    </div>

                    {/* <!-- Content Column --> */}
                    <div className="col-lg-6 mb-4">

                        <Members baseurl={baseurl} />

                    </div>

                    <div className="col-lg-6 mb-4">


                        {/* <!-- Approach --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary font-japanese">掲示板</h6>
                                <div className="text-right">
                                    <button type="button" className="btn btn-primary font-japanese" onClick={toggleswitchview}>switch</button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="scroll">
                                    <Informationswitch switchview={switchview} setswitchview={setswitchview} user_id={user_id} baseurl={baseurl} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboardview;