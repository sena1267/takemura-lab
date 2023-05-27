// 何のページを呼び出すかを管理するファイル
import React from "react";
import Dashboardview from "./Dashboardview";
import Equipmentview from "./Equipmentview";

const Dashboardcontent = ({ isHome, user_id, baseurl }) => {
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
};

export default Dashboardcontent;