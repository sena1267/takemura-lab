// 何のページを呼び出すかを管理するファイル
import React from "react";
import Dashboardview from "./Dashboardview";
import Equipmentview from "./Equipmentview";
import Admin from "./Admin";

const Dashboardcontent = ({ isHome, isAdminView, user_id, baseurl }) => {
    if (isAdminView === false) {
        // もし受け取ったisHomeの値によって呼び出す関数を変更させる
        if (isHome === true) {
            return (
                <>
                    {/* ホーム画面の呼び出しを行う */}
                    <Dashboardview user_id={user_id} baseurl={baseurl} />
                </>
            );
        } else {
            return (
                <>
                    {/* 備品管理画面の呼び出しを行う */}
                    <Equipmentview user_id={user_id} baseurl={baseurl} />
                </>
            );
        }
    } else {
        return (
            <>
                <Admin baseurl={baseurl} />
            </>
        );
    }
};

export default Dashboardcontent;