import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Information from "./Information";

const Informationlistcontent = ({ user_id, baseurl, setisdetailvalue, setdetailevalue }) => {
    const [informationsValues, setinformationValues] = useState([]);
    let fetchequipment = `/information/`;
    useEffect(() => {
        async function fetchequipmentdata() {
            console.log(baseurl + fetchequipment)
            const res = await axios.get(baseurl + fetchequipment);
            if (res.data && Array.isArray(res.data)) {
                // posted_atフィールドで昇順にソート
                res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setinformationValues(res.data)
            }
        };
        fetchequipmentdata();
    }, []);
    return (
        <>
            {informationsValues.map((information, index) =>
                <Information key={index} details={information} setisdetailvalue={setisdetailvalue} setdetailevalue={setdetailevalue} />
            )}
        </>
    )
};

export default Informationlistcontent;