import React from "react";
import axios from 'axios';

const Remainingmoney = ({ remaining }) => {
    return (
        <>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 font-japanese">
                                    会計余剰金
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">￥{remaining}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Remainingmoney;