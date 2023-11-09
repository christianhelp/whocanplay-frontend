import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/App.css";
import "../styles/Explore.css";
import Loader from "../components/Loader";
import GameCard from "../components/GameCard";

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
        <div className="flex flex-col justify-center items-center">
            {
                loading ? 
                <Loader/>
                :
            <div className="explore-contents">
                <h1 className="pt-4 mb-4 text-4xl font-extrabold text-gray-900 md:text-2xl lg:text-3xl dark:text-white ">Check Out These Popular Games!</h1>
                <div class="grid grid-cols-4 gap-4 px-8">
                    {games.map((game,index) =>(
                        GameCard(game.name,game.graphics,game.directX,game.processor,
                        game.description,game.percent,game.imageURL,index)
                    ))}
                </div>

            </div>
            }
        </div>
    );
}