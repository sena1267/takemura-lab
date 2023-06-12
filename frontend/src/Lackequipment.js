import React from "react";
import axios from "axios";

const Lackequipment = ({ details, redirectvar, setredirectvar, baseurl }) => {
    const deletelack = () => {
        axios.delete(`${baseurl}/equipment/lack/${details.id}/`)
            .then((response) => {
                console.log(response);
                setredirectvar(redirectvar + 1);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <>
            <tr>
                <td>{details.name}</td>
                <td><a className="text-danger" onClick={deletelack}>削除</a></td>
            </tr>
        </>
    )
};

export default Lackequipment;