import React from "react";
import "./Equipmentlistcontent.css";

const Lackequipmentlist = ({ user_id, baseurl }) => {
    return (
        <>
            <table className='font-japanese'>
                <tr>
                    <th>備品名</th>
                    <th>記入者</th>
                </tr>
            </table>
        </>
    );
};

export default Lackequipmentlist;