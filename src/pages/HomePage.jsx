import "../styles/HomePage.css";
import { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';
import ScrollButton from "../components/ScrollButton";
import Typed from 'typed.js';
import {FaSteamSymbol} from "react-icons/fa";

export default function HomePage(){

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Powered by The Steam Hardware Survey"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay:400,
      backDelay:400,
      typeSpeed: 60,
      backSpeed: 70,
      loop:true,
      smartBackspace:true,
      showCursor:false
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

    return (
        // We will want to remove this loader function once we are done. This is just a placeholder for it
        <div className='homepage'> 
           <div className="intro">
                <ScrollButton/>
                <h1 className="introtitle">Who Can Play?</h1>
                <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Created by Christian Walker, Lauren Grissom, and Caroline Oliver</h1>
                <div className="steam">
                    <h1><span ref={el}></span></h1>
                    <FaSteamSymbol/>
                </div>
                <nav className="navbuttons">
                    <ul className="navs">
                        <li className="hover:cursor-pointer"><ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-50} className="scroll-link">About</ScrollLink></li>
                        <li className="hover:cursor-pointer"><ScrollLink to="how" smooth={true} duration={500} spy={true} offset={-50} className="scroll-link">How Does It Work?</ScrollLink></li>
                        <Link to="/explore" className="group flex flex-row  justify-center  items-center bg-[#1f6dc7]  m-2 text-2xl rounded-lg p-6 hover:bg-gray-500">
                            Find Games
                            <svg className=" transition ease-in-out delay-150 group-hover:translate-x-4 w-6 h-5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            </Link>
                    </ul>
                </nav>
                <div name="about" className="about" id="about_id">
                    <h1 className="pl-[1%] pb-5 text-7xl font-bold" align='left'>
                        About
                    </h1>
                    <div className="description w-full text-2xl">
                        <div className="space-y-10">

                            <div className="pl-[48%] flex justify-end">
                                <p align='right'>
                                    Steam is a trendy marketplace for developers to upload and sell their games. 
                                    Because of this, It has become very well-known and many people use it. On top of 
                                    selling games, Steam also provides users with a service called the 
                                    <a style={{color:"#1f6dc7"}}href="https://store.steampowered.com/hwsurvey/Steam-Hardware-Software-Survey-Welcome-to-Steam"> Steam Hardware & Software survey</a>.
                                </p>
                            </div>

                            <div className="pr-[48%] flex justify-end">
                                <p align='left'>
                                    In short, the Steam Hardware & Software Survey conducts a monthly survey of user's hardware and software to collect and further understand user's computer details. 
                                    With this information, Steam says that this will be incredibly helpful in making decisions about technological investments and products to offer. 
                                    As avid gamers and consumers, we could not agree more with this statement.
                                </p>
                            </div>

                            <div className="pl-[48%] flex justify-end">
                                <p align='right'>
                                    That is why we sought to better contextualize and provide users with a great experience 
                                    to learn about all that the Steam Hardware and Software Survey offers. 
                                    This project aims to cater to the needs of two distinct, yet interconnected audiences. 
                                    Firstly, it is designed to provide valuable insights to video game developers who seek to 
                                    utilize this resource as a pivotal marketing tool. 
                                </p>
                            </div>

                            <div className="pr-[48%] flex justify-end">
                                <p align='left'>
                                    By offering a comprehensive understanding of the demographics and
                                    preferences of potential players, game developers can make informed decisions in terms of game
                                    design, marketing strategies, and target audience engagement. Secondly, this database also serves the
                                    interests of gaming enthusiasts and hobbyists, offering them an invaluable resource to delve deeper into
                                    the dynamics of who can enjoy a particular video game.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="how pl-2 pr-[2%]">
                    <h1 className='font-bold' align='left'>How Does It Work?</h1>
                    <div className='flex flex-col justify-end'>
                        <div className='pl-[45%] text-2xl' align='right'>
                            <p>"Who Can Play?" uses data collected from Steam's Hardware Survey and the minimum requirements for each Steam game. It compares each game's GPU requirement with what the userbase currently has, and sums up all users who meet that requirement. </p>
                            <p>A percentage of the users who have sufficient hardware is generated. This way, we can answer the question: who can play?</p>
                        </div>
                        <div className='pt-3 pr-[30%] text-2xl' align='left'>
                            <p>"Who Can Play?" is made possible with React, Tailwind, Spring Boot, and SQL.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
    );
}