import React from "react";
import Equipmentlistcontent from './Equipmentlistcontent';

const Equipmentviewswitch = ({ switchview, user_id, baseurl }) => {
    if (switchview == true) {
        return (
            <>
                <Equipmentlistcontent user_id={user_id} baseurl={baseurl} />
            </>
        );
    } else {
        return (
            <>
            </>
        );
    };
}

export default Equipmentviewswitch;