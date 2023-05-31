import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Memberroot from './Memberroot';

const Members = ({ baseurl }) => {

    const [allmembersValues, setallmembersValues] = useState([]);

    let fetchallmember = `/user`;

    useEffect(() => {
        async function fetchAllMembers() {
            const res = await axios.get(baseurl + fetchallmember);
            if (res.data && Array.isArray(res.data)) {
                setallmembersValues(res.data)
            }
            console.log("type: " + typeof (allmembersValues));
            console.log("data: " + allmembersValues);
        };
        fetchAllMembers();
    }, []);



    return (
        <div className="row">
            {allmembersValues.map((member, index) =>
                <Memberroot key={index} details={member} />
            )}
        </div>
    );
};

export default Members;