import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Equipment from "./Equipment";
import './Equipmentlistcontent.css';

const Equipmentlistcontent = ({ user_id, baseurl }) => {
    const [equipmentsValues, setequipmentValues] = useState([]);

    let fetchequipment = `equipment/`;

    useEffect(() => {
        async function fetchequipmentdata() {
            const res = await axios.get(baseurl + fetchequipment);
            if (res.data && Array.isArray(res.data)) {
                setequipmentValues(res.data)
            }
            fetchequipmentdata();
        }
    }, []);

    return (
        <>
            <table class='font-japanese'>
                <tr>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
                {equipmentsValues.map((equipment, index) =>
                    <Equipment key={index} details={equipment} />
                )}
            </table>
        </>
    );
};

export default Equipmentlistcontent;