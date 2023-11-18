import axios from "axios";
import { useEffect,useState } from "react";
import "../styles/App.css";
import Loader from "../components/Loader";
import GameCard from "../components/GameCard";
import ErrorLoading from "../components/ErrorLoading";
import SearchBar from "../components/searchBar";
import Filters from "../components/Filters";

export default function Explore(){
    //This is setLoading in searchbar
    const [loading,setLoading] = useState(true);
    //This is setSuccess in searchBar
    const[success,setSuccess] = useState(true);
    //This is setSearchResults in searchbar
    const [games,setGames] = useState([]);
    //This is for when we want to check if the results are empty or not
    const[errorLoadingMessage,setErrorLoadingMessage] = useState("");
    
    //For the filter options themselves
    //TODO: Make some logic so that these cannot both be checked at the same time 
    const defaultFilters = [["Alphabetically",["AZ","ZA"]]];

    //Basically what we a map that holds other maps. This way, we can use the title of the map to access values
    const[filterOptions,setFilterOptions] = useState(new Map(defaultFilters));
    
    //I think we need two maps ngl. One is for all of the processing stuff and another would be for what arguments actually need to be passed
    const[searchParameters,setSearchParameters] = useState(new Map([["Alphabetically",new Set()]]));


    console.log("Explore called!");

    //Use effect for explore query
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

        //Will probably designate a filter option to return a set of all the possible graphics and processors that we can filter by at the moment
        useEffect(()=>{
            setLoading(true);
            axios.get("http://localhost:8080/filters",{
            timeout:6000
        })
        .then(res=>{
            const data = res.data;
            
            //This maps all of the values 
            //(This literally took me an hour of learning actual Javascript and could have easily been done with a simple for loop, but I am different)
            Object.entries(data).map((entryPairs)=>{
                console.log("Entry:",entryPairs[0],entryPairs[1])
                setFilterOptions(new Map(filterOptions.set(entryPairs[0],entryPairs[1])))
                setSearchParameters(new Map(searchParameters.set(entryPairs[0],new Set())));
            });
            console.log("Search Params",searchParameters);
            setLoading(false);
            setSuccess(true);
        })
        .catch( (err)=>{
            console.error(`The following error occured: ${err}`);
            setLoading(false);
            setErrorLoadingMessage("Uh Oh! A connection error occured\nPlease Try Again Later\n");
            setSuccess(false);
        })
            return ()=>{}
        },[]);
    return (
        <div className="flex flex-col justify-center items-center">
            {
                loading ? 
                <Loader/>
                :
                !success ?
                <div className="flex flex-col pt-8">
                    <SearchBar setLoading={setLoading} setSuccess={setSuccess} setSearchResults={setGames} setResultsEmptyMessage={setErrorLoadingMessage} filterOptions={["Test","dicks"]}/>
                    <ErrorLoading errorMessage={errorLoadingMessage}/>
                </div>
                :
            <div className="pt-5">
                <h1 className="pt-4 mb-4 text-3xl font-extrabold text-gray-900  dark:text-white ">
                    Search and Filter For Games
                    </h1>
                <SearchBar setLoading={setLoading} setSuccess={setSuccess} setSearchResults={setGames} setResultsEmptyMessage={setErrorLoadingMessage} searchInputs={searchParameters}/>
                <div className="flex">
                    <Filters filterOptions={filterOptions} searchParams={searchParameters} setSearchParams={setSearchParameters}/>
                    <div className="pt-4 grid grid-cols-4 gap-4 px-8">
                    {games.map((game,key) =>(
                        <GameCard key={key} gameName={game.name} gameGraphics={game.graphics} directX={game.direct} 
                        gameProcessor={game.processor} gameDescription={game.description} 
                        gamePercent={game.percent} imageURL={game.imageURL}/>
                    ))}
                </div>
                </div>
            </div>
            }
        </div>
    );
}