import React from "react";

const Mamberroot = ({ details }) => {
    // ここのif文で研究室の中にいるか否かを分岐させる
    if (true) {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card bg-secondary text-white shadow">
                    <div className="card-body">
                        {details.name}
                        <div className="text-white-50 small">not office</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card bg-danger text-white shadow">
                    <div className="card-body">
                        {details.name}
                        <div className="text-white-50 small">at office</div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Mamberroot;