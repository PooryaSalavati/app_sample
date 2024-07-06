import React from "react";
import "./cardinfo.css";

function CardInfo({name,email,password}){
    return (
        <>
            <div className="card-info">
                <p>نام : {name}</p>
                <p>ایمیل : {email}</p>
                <p>رمز عبور : {password}</p>
            </div>
        </>
    )
}

export default CardInfo;