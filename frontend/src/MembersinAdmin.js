import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import EachMemberinAdmin from "./EachMemberinAdmin";

const MembersinAdmin = ({ baseurl, update, setUpdate }) => {
    const [allmembersValues, setallmembersValues] = useState([]);
    const [changeview, setChangeView] = useState(0)
    let fetchallmember = `/user`;

    useEffect(() => {
        async function fetchAllMembers() {
            const res = await axios.get(baseurl + fetchallmember);
            if (res.data && Array.isArray(res.data)) {
                res.data.sort((a, b) => a.id - b.id);
                setallmembersValues(res.data)
            }
            console.log("type: " + typeof (allmembersValues));
            console.log("data: " + allmembersValues);
        };
        fetchAllMembers();
    }, [update])
    return (
        <div className="row">
            {allmembersValues.map((member, index) =>
                <EachMemberinAdmin key={index} details={member} baseurl={baseurl} setChangeView={setChangeView} changeview={changeview} setUpdate={setUpdate} />
            )}
        </div>
    );

};

export default MembersinAdmin;