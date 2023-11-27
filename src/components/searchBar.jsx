import axios from "axios";
import { useState } from "react";

import { searchMapEmpty, searchParametersEmpty } from "../utils/SearchParameters";

//We need to send in all of our request setters
export default function SearchBar({setLoading,setSuccess,setSearchResults,setResultsEmptyMessage,setSearchParameters,searchParameters,setPlayabilityFilter,playbilityFilter}){
    //The use state for search input from the searchbar itself
    const[searchInput,setSearchInput] = useState('');
    

    const handleInputChange = (e)=>{
        setSearchInput(e.target.value);
    }

    
    //This will handle making our request
    const handleSearchRequest = async (e) =>{
        e.preventDefault();
        if (searchInput.length<=0 && playbilityFilter.length <=0 && searchParametersEmpty(searchParameters)) return;
      
        console.log("gameName:",searchInput);
        //Where all of our search parameters are specified. We need to watch out for the order here and find a fool proof way to handle that
        //Best I can think of right now is to go through all of them and filter by if they are turned true or not
        
        const searchArgs = new Map();
        
        //NOTE: State seems to be refreshed once we set our results so we want to make sure to check for if our map is defined
        searchParameters.forEach((value,key)=>{
          if (!searchMapEmpty(value)){
            searchArgs.set(key,Array.from(value));
          }
          value.clear();
          searchParameters.set(key,new Set());
        });
        console.log("After clearing:",searchParameters);
        setSearchParameters(searchParameters);
        


        console.log("Entries:", encodeURIComponent(searchArgs));
        const jsonString = JSON.stringify(Object.fromEntries(searchArgs));
        //Here we want to clear the values
        console.log("playability filter:",playbilityFilter);
        setLoading(true);
        axios.get("http://localhost:8080/search",{
          //Something weird with CORS was going on here, but Stringifying it fixed it...idk
          params:{
            "filterArgs": encodeURIComponent(jsonString),
            "gameName": searchInput,
            "orderBy":playbilityFilter
          },
          headers:{
            'Content-Type':'application/json'
          },
          timeout:6000 
      })
        .then((res)=>{
            console.log("Results of query:",res.data);
            
            if (res.data.length > 0){
                setSearchResults(res.data);
                setLoading(false);
                setSuccess(true);
            }
            else{
                console.log("nope!");
                setResultsEmptyMessage("Oh No:( Looks like No Search Results available");
                setLoading(false);
                setSuccess(false);
            } 
        })
        .catch(error=>{
            console.log(error);
            setLoading(false);
            setResultsEmptyMessage("Uh Oh! A connection error occured\nPlease Try Again Later\n");
            setSuccess(false);
            
        })
      }

    return (
        //Search bar styling needs to be fixed
    <div className="flex justify-center pb-4 w-auto">
        <form onSubmit={handleSearchRequest} className="w-9/12">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      {/* Container to hold the whole thing */}
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          {/* This is for the little search icon */}
          <svg 
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Thousands of Games!"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
          Search
        </button>
      </div>
    </form>
    </div>
    );
}