import React from "react";

const Information = ({ details, setisdetailvalue, setdetailevalue }) => {
    const switchisdetailvalue = () => {
        let detail = { 'id': details.id, 'title': details.title, 'content': details.content, 'url': details.url, 'created_at': details.created_at, 'created_by': details.created_by };
        setdetailevalue(detail);
        setisdetailvalue(true);
    };
    return (
        <>
            <p><a className="mt-1" onClick={switchisdetailvalue}>{details.title}（{details.created_at}）</a></p>
        </>
    );
}

export default Information;