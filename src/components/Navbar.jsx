import "../styles/Navbar.css";
import { Outlet,Link, NavLink } from "react-router-dom";
import homeIcon from "../assets/home_icon.png";


const Navbar = () =>{
    return (
        <nav>
            <div className="navbar">    
                <div className="navbarWrapper">
                    <NavLink to="/"> <img src={homeIcon} className="homeicon"/> </NavLink>
                    <ul className="otherlinks">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/explore">Explore</NavLink></li>
                    </ul>   
                </div>
            </div>
        </nav>
    );
}

export default Navbar;