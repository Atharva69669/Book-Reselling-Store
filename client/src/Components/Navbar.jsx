import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import {useCookies} from 'react-cookie';
const Navbar = () => {
    
    const [cookies,setCookies]=useCookies(["access_token"]);
    const logout=()=>{
        setCookies("access_token","");
        window.localStorage.removeItem("userID");
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <input type="checkbox" name="" id="checkbox" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/buy'><li>Shop Now</li></Link>
                        <Link to='/sell'><li>Your Store</li></Link>
                        <Link to='/addbook'><li>Sell Books</li></Link>
                        {cookies.access_token?<button className='logout' onClick={logout}>Logout</button>:
                        <Link to="/login"><li>Login</li></Link>}
                        
                    </ul>
                    <div className="logo">
                        <h3 style={{marginLeft:"5px"}}>Shelf Share</h3>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar