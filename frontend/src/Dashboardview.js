// ホーム画面の内容の定義
import React from "react";
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './Dashboardview.css';
import Members from './Members.js';

const Dashboardview = ({ user_id, baseurl }) => {
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

                    {/* <!-- Content Column --> */}
                    <div className="col-lg-6 mb-4">

                        <Members baseurl={baseurl} />

                    </div>

                    <div className="col-lg-6 mb-4">


                        {/* <!-- Approach --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary font-japanese">掲示板</h6>
                            </div>
                            <div className="card-body">
                                <p className="">みんな頑張ってて偉いです。(2023.5.16 19:37)</p>
                                <p className="mb-0">来週の金曜日にミーティングしましょう。(2023.6.19 12:40)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboardview;