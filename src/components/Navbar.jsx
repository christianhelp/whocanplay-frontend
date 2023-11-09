import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home_icon.png";
import {AiOutlineHome} from "react-icons/ai";

const Navbar = () =>{
    return (
        <nav className="nav">
            <div className="navbar">    
                <div className="navbarWrapper">
                    <NavLink to="/"> <AiOutlineHome className="homeicon"/> </NavLink>
                    <ul className="otherlinks">
                        <li><NavLink to="/explore">Explore</NavLink></li>
                        <li><NavLink to="/search">Search</NavLink></li>
                    </ul>   
                </div>
            </div>
        </nav>
    );
}

export default Navbar;