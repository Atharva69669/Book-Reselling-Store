import React from 'react'
import '../styles/Login.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'

const Login=()=> {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [_,setCookie]=useCookies(["access_token"]);
    const handleForm=async (e)=>{
        e.preventDefault();
        try{
         const res=await axios.post("http://localhost:5003/auth/login",{username,password})
         console.log(res);
         setCookie("access_token",res.data.token);
         window.localStorage.setItem("userID",res.data.userID)
         alert("Logged in successfully !");
        }
        catch(e){

        }
    //  console.log(event);
    }

    return (
        <div className='main-sec'>
            <section id="cart-section">
                <div className="container">
                    <div className="row">
                        <div className="cart cart2">
                            <div style={{ zIndex: 1 }} className="column">
                                <div className="top-area ">
                                    <p>about us</p>
                                    <p>terms & conditions</p>
                                    <p>security</p>
                                </div>
                                <div className="log-in-area column">
                                    <h2>Log in</h2>
                                    <label className="column" htmlFor=""> USER NAME
                                        <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                                    </label>
                                    <label className="column" htmlFor=""> PASSWORD
                                        <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                                    </label>

                                </div>
                                <div className="button-area column"><button style={{cursor:"pointer"}} type="submit" onClick={handleForm}>Log in</button>
                                    <div className="account-area">
                                        <p>Don't have account?<Link className="none" to='/register'>Sign up here</Link></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            
            </section>
        </div>
    )
}

export default Login