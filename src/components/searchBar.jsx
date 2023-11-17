import axios from "axios";
import { useState } from "react";


//We need to send in all of our request setters
export default function SearchBar({setLoading,setSuccess,setSearchResults,setResultsEmptyMessage}){
    
    const[searchInput,setSearchInput] = useState('');

    const handleInputChange = (e)=>{
        setSearchInput(e.target.value);
    }

    
    //This will handle making our request
    const handleSearchRequest = async (e) =>{
        e.preventDefault();
        if (searchInput.length<=0) return;
      //We then set the data which will trigger the data 
        console.log("Searchinput is:",searchInput);
        const searchParams = {
            "name":searchInput,
        }
        setLoading(true);
        axios.get("http://localhost:8080/search",{
          //Something weird with CORS was going on here, but Stringifying it fixed it...idk
          params:{
            "searchArgs":JSON.stringify(searchParams)
          },
          timeout:6000
        }
        )
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
            setErrorLoadingMessage("Uh Oh! A connection error occured\nPlease Try Again Later\n");
            setSuccess(false);
        })
      }

    return (
        //Search bar styling needs to be fixed
    <div className="flex justify-center items-center">
        <form onSubmit={handleSearchRequest} className="w-9/12">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
          required
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