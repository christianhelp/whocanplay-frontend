import axios from "axios";
import { useEffect,useState } from "react";
import "../styles/App.css";
import Loader from "../components/Loader";
import GameCard from "../components/GameCard";
import ErrorLoading from "../components/ErrorLoading";
import SearchBar from "../components/SearchBar";
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
    const defaultFilters = [["Playability",["Highest","Lowest","Ascending","Descending"]]];

    //Basically what we a map that holds other maps. This way, we can use the title of the map to access values
    const[filterOptions,setFilterOptions] = useState(new Map(defaultFilters));
    
    //This will keep track of all of our values that are selected at a time 
    const[searchParameters,setSearchParameters] = useState(new Map([["Playability",new Set()]]));

    //This keeps track of what value we have inside of our playability filter
    const[playbilityFilter,setPlayabilityFilter] = useState("Playability: Highest");



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
            console.log(data);
            //This maps all of the values 
            Object.entries(data).map(([k,v])=>{
                //Assigns the new value with the k-v pair

                setFilterOptions(new Map(filterOptions.set(k,v)))
                setSearchParameters(new Map(searchParameters.set(k,new Set())));
            });
            // console.log("Search Params",searchParameters);
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
        
        //This is a temporary test
        useEffect(()=>{
            
            console.log("Playability filter is:",playbilityFilter);

            return ()=>{}
        },[playbilityFilter])

    return (
        <div className="flex flex-col justify-center items-center">
            {
                loading ? 
                <Loader/>
                :
                !success ?
                <div className="flex flex-col pt-8">
                    <SearchBar setLoading={setLoading} setSuccess={setSuccess} setSearchResults={setGames} setResultsEmptyMessage={setErrorLoadingMessage} searchParameters={searchParameters} playbilityFilter={playbilityFilter}/>
                    <div className="flex flex-col items-center pb-8">
                        <ErrorLoading errorMessage={errorLoadingMessage}/>
                    <div className='flex'>
                        <button onClick={()=>{setSuccess(true)}} className=" group text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className=" -scale-x-100 pl-4 transition ease-in-out delay-100 group-hover:-translate-x-4 w-8 h-6 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        Go Back
                        </button>
                    </div>
                    </div>
                </div>
                :
            <div className=" flex pt-5">
                <Filters filterOptions={Array.from(filterOptions)} searchParams={searchParameters} setSearchParams={setSearchParameters} setPlaybilityFilter={setPlayabilityFilter}/>
                <div className="flex-col">
                    <SearchBar setLoading={setLoading} setSuccess={setSuccess} setSearchResults={setGames} setResultsEmptyMessage={setErrorLoadingMessage} setSearchParameters={setSearchParameters} searchParameters={searchParameters} setPlayabilityFilter={setPlayabilityFilter} playbilityFilter={playbilityFilter}/>
                    <div className="pt-4  justify-center pb-12 grid grid-cols-4 gap-4 px-8 h-[100vh] overflow-y-auto">
                    {games.map((game,key) =>(
                        <GameCard key={key} gameName={game.gameName} gameGraphics={game.gpu} 
                        gameProcessor={game.processor} gameDescription={game.description} 
                        gamePercent={game.percent} imageURL={game.url}/>
                    ))}
                </div>
                </div>
            </div>
            }
        </div>
    );
}