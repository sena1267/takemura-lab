import React from "react";

const Equipment = ({ details }) => {
    return (
        <>
            <tr>
                <th>{details.name}</th>
                <th>{details.price}</th>
            </tr>
        </>
    );
};

export default Equipment;