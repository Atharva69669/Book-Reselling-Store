import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Register.css'
import axios from 'axios'

const Register = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const handleForm=async (e)=>{
        e.preventDefault();
        try{
         const res=await axios.post("http://localhost:5003/auth/reg",{username,password})
         console.log(res.data);
         alert("Registered Now Log In");
        }
        catch(e){
          console.log(e);
        }
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
                                    <h2>Sign Up</h2>
                                    <label className="column" for="">  SET USERNAME
                                        <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} />
                                    </label>
                                    <label className="column" for=""> SET PASSWORD
                                        <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                    </label>

                                </div>
                                <div className="button-area column"><button style={{cursor:"pointer"}}type="submit" onClick={handleForm}>Create Account</button>
                                    <div className="account-area">
                                        <p>Already have an account?<Link className="none" to='/login'>Login here</Link></p>
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

export default Register