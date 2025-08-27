import React, { useState } from 'react'
import "./auth.css"
import { Link, useNavigate } from 'react-router-dom'
import { UserData } from '../../Context/UserContext';

const Verify = () => {
    const [otp,setOtp]=useState("");
    const{btnLoading,verifyOtp}=UserData()
    const navigate= useNavigate()
    const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp),navigate);
    console.log(otp);
  };
    return (

    <div className='auth-page'>
        <div className="auth-from">
            <h3>
                Verify Account
            </h3>
            <form onSubmit={submitHandler} >
                <label htmlFor='otp'>OTP</label>
                <input type='number' value={otp}onChange={(e)=>setOtp(e.target.value)}required/>
                <button disabled={btnLoading} type='submit' className='common-btn'>
                    {btnLoading? "Please Wait...": "Verify"}
                </button>
            </form>
            <p>
                Go to <Link to ="/login">Login</Link>
            </p>
        </div>
    </div>
  )
}

export default Verify
