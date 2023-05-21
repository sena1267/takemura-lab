import React from 'react';
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './Dashboardview.css';
import Dashboardcontent from './Dashboardcontent';
import { useState } from 'react';
import Navigate from './Navigate';
import Tab from './Tab';

const Dashboardroot = ({ user_id }) => {

    const [isHomeValues, setisHomeValues] = useState(true);

    const [showNavigateValues, setshowNavigateValues] = useState(true);

    const showNavigate = () => {
        setshowNavigateValues(true);
    };

    const hideNavigate = () => {
        setshowNavigateValues(false);
    };

    return (
        <>
            {/* <!-- Page Wrapper --> */}
            <div id="page-top">
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <Navigate setisHomeValues={setisHomeValues} showNavigateValues={showNavigateValues} setshowNavigateValues={setshowNavigateValues} />

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" class="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/* <!-- Sidebar Toggle (Topbar) --> */}
                                <Tab showNavigateValues={showNavigateValues} showNavigate={showNavigate} />


                                {/* <!-- Topbar Navbar --> */}
                                <ul class="navbar-nav ml-auto">


                                    <div class="topbar-divider d-none d-sm-block"></div>

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li class="nav-item dropdown no-arrow">
                                        <a class="nav-link dropdown-toggle" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={hideNavigate}>
                                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Tatsuma Furuya</span>
                                            {/* <img class="img-profile rounded-circle" */}
                                            {/* src="#" /> */}
                                            <i class="fas fa-solid fa-user fa-2s text-gray-300"></i>
                                        </a>
                                    </li>

                                </ul>

                            </nav>
                            {/* ページのコンテンツ部分 */}
                            <Dashboardcontent isHome={isHomeValues} user_id={user_id} />
                        </div>
                    </div>
                </div>
                {/* <!-- End of Page Wrapper --> */}
                <footer class="sticky-footer bg-white">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; Takemura Lab</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- Scroll to Top Button--> */}
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>
            </div>
        </>
    );
};

export default Dashboardroot;