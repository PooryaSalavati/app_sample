import React, { useState } from "react";
import "./register.css";
import CardInfo from "../cardinfo/cardinfo";

function Register(){

    const [ formData, setFormData ] = useState({
        "name":"",
        "email":"",
        "password":"",
    });
    const [ showComponent, setShowComponent ] = useState(false);

    const resetFormData = () => {
        setFormData({
            "name":"",
            "email":"",
            "password":"",
        })
    }

    const formDataHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const SubmitForm = () => {
        if(formData.name.trim() == '' || formData.email.trim() == '' || formData.password.trim() == ''){
            alert("فیلد های ورودی فاقد اطلاعات می باشند")
        } else{
            setShowComponent(true);
        }
    }

    return (
        <>
            <div id="register">
                <div className="heading-register">
                    <h4>ثبت نام</h4>
                </div>
                <form>
                    <input name="name" value={formData.name} className="text-field" onChange={(e)=>formDataHandler(e)} placeholder="لطفا نام را وارد نمایید" type="text"/>
                    <input name="email" className="text-field" value={formData.email} onChange={(e)=>formDataHandler(e)} placeholder="لطفا ایمیل را وارد نمایید" type="email"/>
                    <input name="password" className="text-field" value={formData.password} onChange={(e)=>formDataHandler(e)} placeholder="لطفا رمز عبور خود را وارد نمایید" type="password"/>
                    <button type="button" className="btn" onClick={SubmitForm}>ثبت</button>
                </form>
            </div>

            {showComponent && <CardInfo {...formData}/>}
        </>
    )
}

export default Register;