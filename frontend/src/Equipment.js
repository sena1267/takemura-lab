import React from "react";

const Equipment = ({ details }) => {
    return (
        <>
            <tr>
                <td>{details.name}</td>
                <td>{details.price}</td>
            </tr>
        </>
    );
};

export default Equipment;