import "../styles/HomePage.css";
import { useEffect,useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import {Link as ScrollLink,Element,Events,animatedScroll as scroll} from 'react-scroll';
export default function HomePage(){
    const [loading,setLoading] = useState(true);

    useEffect((()=>{
        setTimeout(()=>{
            setLoading(false);
        },1000);
        return () => {};
    }
    ),[]);
    return (
        // We will want to remove this loader function once we are done. This is just a placeholder for it
        <div className='homepage'>
            {
                loading ? 
           <Loader/>
            :
           <div className="intro">
                <h1 className="introtitle">Who Can Play?</h1>
                <h1 className="credits">Created by Christian Walker,Lauren Grissom, and Caroline Oliver</h1>
                <h1 className="steam">Powered by The Steam Hardware Survey</h1>
                <nav className="navbuttons">
                    <ul className="navs">
                        <li><ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-50} className="scroll-link">About</ScrollLink></li>
                        <li><ScrollLink to="how" smooth={true} duration={500} spy={true} offset={-50} className="scroll-link">How Does It Work?</ScrollLink></li>
                        <li><Link to="/search" className="scroll-link">Try It Out!</Link></li>
                    </ul>
                </nav>

                <div name="about" className="about">
                    <h1>
                        About
                    </h1>
                    <div className="description">
                    <p>
                        Steam is a trendy marketplace for developers to upload and sell their games. 
                        Because of this, It has become very well-known and many people use it. On top of 
                        selling games, Steam also provides users with a service called the 
                        <a style={{color:"#1f6dc7"}}href="https://store.steampowered.com/hwsurvey/Steam-Hardware-Software-Survey-Welcome-to-Steam"> Steam Hardware & Software survey</a>.
                    </p>
                    <p>
                        In short, the Steam Hardware & Software Survey conducts a monthly survey of user's hardware and software to collect and further understand user's computer details. 
                        With this information, Steam says that this will be incredibly helpful in making decisions about technological investments and products to offer. 
                        As avid gamers and consumers, we could not agree more with this statement.
                    </p>
                    <p>
                        That is why we sought to better contextualize and provide users with a great experience 
                        to learn about all that the Steam Hardware and Software Survey offers. 
                        This project aims to cater to the needs of two distinct, yet interconnected audiences. 
                        Firstly, it is designed to provide valuable insights to video game developers who seek to 
                        utilize this resource as a pivotal marketing tool. 
                    </p>
                    <p>
                        By offering a comprehensive understanding of the demographics and
                        preferences of potential players, game developers can make informed decisions in terms of game
                        design, marketing strategies, and target audience engagement. Secondly, this database also serves the
                        interests of gaming enthusiasts and hobbyists, offering them an invaluable resource to delve deeper into
                        the dynamics of who can enjoy a particular video game.</p>
                    </div>
                </div>
                <div name="how" className="how">
                    <h1>How Does It Work?</h1>
                </div>
            </div>
            }
        </div>
            
    );
}