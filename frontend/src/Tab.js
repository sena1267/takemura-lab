import React from 'react';
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './Dashboardview.css';

const Tab = ({ showNavigateValues, showNavigate }) => {
    if (showNavigateValues === true) {
        return (
            <></>
        );
    } else {
        return (
            <>
                <button id="" className="btn rounded-circle mr-3" onClick={showNavigate}>
                    <i className="fa fa-bars"></i>
                </button>
            </>
        );
    }
}

export default Tab;