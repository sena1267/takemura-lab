import React from "react";

const Equipment = ({ details, setisdetailvalue, setdetailevalue }) => {

    const switchisdetailvalue = () => {
        let detail = { 'id': details.id, 'name': details.name, 'price': details.price, 'buyer_id': details.buyer_id, 'bought_date': details.bought_date };
        setdetailevalue(detail);
        setisdetailvalue(true);
    };
    return (
        <>
            <tr>
                <td><a href='#' onClick={switchisdetailvalue}>{details.name}</a></td>
                <td>{details.price}</td>
            </tr>
        </>
    );
};

export default Equipment;