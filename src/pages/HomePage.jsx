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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut. Elementum pulvinar etiam non quam lacus suspendisse. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Adipiscing diam donec adipiscing tristique risus. Mi in nulla posuere sollicitudin aliquam. Mauris nunc congue nisi vitae. Tincidunt augue interdum velit euismod in pellentesque massa. Convallis aenean et tortor at. Condimentum mattis pellentesque id nibh tortor. Justo donec enim diam vulputate ut pharetra sit. Augue interdum velit euismod in pellentesque. Placerat duis ultricies lacus sed turpis tincidunt id. Aliquet risus feugiat in ante metus dictum.

                </p>
                    <p>

                        Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Tortor posuere ac ut consequat. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Netus et malesuada fames ac turpis egestas. Bibendum arcu vitae elementum curabitur vitae nunc. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris nunc congue nisi vitae suscipit tellus. Nam at lectus urna duis. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ornare quam viverra orci sagittis eu volutpat odio. Nunc id cursus metus aliquam eleifend mi. Magna fringilla urna porttitor rhoncus dolor purus non enim. Auctor augue mauris augue neque gravida in fermentum. Suspendisse interdum consectetur libero id faucibus. Elementum nisi quis eleifend quam adipiscing vitae proin. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Aliquam purus sit amet luctus venenatis.

                    </p>
                    <p>
                        Massa enim nec dui nunc mattis enim ut tellus elementum. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Viverra aliquet eget sit amet tellus cras adipiscing enim. Nunc non blandit massa enim. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Amet mauris commodo quis imperdiet massa tincidunt. Volutpat consequat mauris nunc congue nisi vitae suscipit. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Egestas maecenas pharetra convallis posuere morbi leo urna. Nisi lacus sed viverra tellus. Erat imperdiet sed euismod nisi porta lorem mollis. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Feugiat nisl pretium fusce id velit ut tortor pretium. Dui id ornare arcu odio ut.
                    </p>
                    <p>
                        Cras pulvinar mattis nunc sed blandit. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Et ligula ullamcorper malesuada proin libero nunc consequat. Metus aliquam eleifend mi in nulla posuere sollicitudin. Maecenas sed enim ut sem viverra aliquet eget. Amet consectetur adipiscing elit ut. Vitae purus faucibus ornare suspendisse sed. Eget mauris pharetra et ultrices neque ornare aenean euismod. Enim tortor at auctor urna. Ut tristique et egestas quis ipsum. Sit amet venenatis urna cursus eget nunc. Pellentesque massa placerat duis ultricies lacus sed.
                    </p>
                </div>
            </div>
        </div>
            
    );
}