import React from "react";
import axios from 'axios';
import MembersinAdmin from "./MembersinAdmin";
import { useState } from 'react';

const Admin = ({ baseurl }) => {
    const [update, setUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const updatetarget = async () => {
        setIsLoading(true);
        try {
            const usersResponse = await axios.get(`${baseurl}/user`);
            const users = usersResponse.data;
            for (const user of users) {
                if (user.id != 1) {
                    const updatedUser = { ...user, target: user.target + 1 };
                    await axios.post(`${baseurl}/user/update/${user.id}`, updatedUser);
                }
            }
            setUpdate(prevState => !prevState);
        } catch (error) {
            console.error(`Error updating targets: ${error}`);
        }
        setIsLoading(false);
    };

    const resetreset = async () => {
        setIsLoading(true);
        try {
            const usersResponse = await axios.get(`${baseurl}/user`);
            const users = usersResponse.data;
            for (const user of users) {
                if (user.id != 1) {
                    const updatedUser = { ...user, target: user.target - 1 };
                    await axios.post(`${baseurl}/user/update/${user.id}`, updatedUser);
                }
            }
            setUpdate(prevState => !prevState);
        } catch (error) {
            console.error(`Error updating targets: ${error}`);
        }
        setIsLoading(false);
    }
    if (isLoading) {
        return <div style={{ backgroundColor: 'white', height: '100vh', width: '100vw' }} />;
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
                    {/* <!-- Content Column --> */}
                    <div className="col-lg-6 mb-4">

                        <MembersinAdmin baseurl={baseurl} update={update} setUpdate={setUpdate} />

                    </div>
                    {/* <!-- Content Column --> */}
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">管理者ツール</h6>
                            </div>
                            <div className="card-body">
                                <a className="btn btn-success btn-icon-split" onClick={updatetarget}>
                                    <span className="icon text-white-50">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span className="text">月の会計リセット</span>
                                </a>
                            </div>
                            <div className="card-body">
                                <a className="btn btn-danger btn-icon-split" onClick={resetreset}>
                                    <span className="icon text-white-50">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span className="text">リセット取り消し</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;