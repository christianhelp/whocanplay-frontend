import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/App.css";
import "../styles/Explore.css";
import Loader from "../components/Loader";
import Game from "../components/Game";

export default function Explore(){
    const [loading,setLoading] = useState(true);
    const [games,setGames] = useState([]);

    useEffect( ()=>{
        
        axios.get("http://localhost:8080/explore")
        .then((res)=>{
            console.log("Success!");
            const data = res.data;
            console.log(data);
            setGames(data);
            setLoading(false);

        })
        .catch((err)=>{
            console.error(`The following error occured: ${err}`);
        })
        },[]);
    return (
        <div className="explore">
            {
                loading ? 
                <Loader/>
                :
            <div className="explore-contents">
                <h1>
                Check Out These Popular Games!
                </h1>
                <div className="games">
                        {games.map((game,index) =>(
                            Game(game.name,game.graphics,game.directX,game.processor,
                                game.description,game.percent,game.imageURL,index)
                    ))}
                </div>
            </div>
            }
        </div>
    );
}