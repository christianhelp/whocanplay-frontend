import axios from "axios";
import { useEffect,useState } from "react";
import "../styles/App.css";
import Loader from "../components/Loader";
import GameCard from "../components/GameCard";
import ErrorLoading from "../components/ErrorLoading";
import SearchBar from "../components/searchBar";

export default function Explore(){
    //This is setLoading in searchbar
    const [loading,setLoading] = useState(true);
    //This is setSuccess in searchBar
    const[success,setSuccess] = useState(true);
    //This is setSearchResults in searchbar
    const [games,setGames] = useState([]);
    //This is for when we want to check if the results are empty or not
    const[errorLoadingMessage,setErrorLoadingMessage] = useState("");
    useEffect( ()=>{
        axios.get("http://localhost:8080/explore",{
            timeout:6000
        })
        .then((res)=>{
            console.log("Success!");
            const data = res.data;
            console.log(data);
            setGames(data);
            setLoading(false);
            setSuccess(true);
        })
        .catch((err)=>{
            console.error(`The following error occured: ${err}`);
            setLoading(false);
            
            setErrorLoadingMessage("Uh Oh! A connection error occured\nPlease Try Again Later\n");
            setSuccess(false);
        })
        },[]);
    
    return (
        <div className="flex flex-col justify-center items-center">
            {
                loading ? 
                <Loader/>
                :
                !success ?
                <div className="flex flex-col pt-8">
                    <SearchBar setLoading={setLoading} setSuccess={setSuccess} setSearchResults={setGames} setResultsEmptyMessage={setErrorLoadingMessage}/>
                    <ErrorLoading errorMessage={errorLoadingMessage}/>
                </div>
                :
            <div className="explore-contents pt-5">
                <h1 className="pt-4 mb-4 text-3xl font-extrabold text-gray-900  dark:text-white ">
                    Search and Filter For Games
                    </h1>
                <SearchBar setLoading={setLoading} setSuccess={setSuccess} setSearchResults={setGames} setResultsEmptyMessage={setErrorLoadingMessage}/>
                <div className="pt-4 grid grid-cols-4 gap-4 px-8">
                    {games.map((game,key) =>(
                        <GameCard key={key} gameName={game.name} gameGraphics={game.graphics} directX={game.direct} 
                        gameProcessor={game.processor} gameDescription={game.description} 
                        gamePercent={game.percent} imageURL={game.imageURL}/>
                    ))}
                </div>
            </div>
            }
        </div>
    );
}