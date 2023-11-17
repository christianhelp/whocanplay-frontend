import "../styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ErrorLoading from "../components/ErrorLoading";
import SearchBar from "../components/searchBar";


export default function Explore(){
  const [loading,setLoading] = useState(true);
  //Eventually change this to be a list
  const [results,setResults] = useState("Making call, please wait...");
  const[success,setSuccess] = useState(true);
  
    // At the begginning, I could simply display the stuff from the explore page and then provide them an option to search
   

   //Initial run of our useeffect stuff
    useEffect( ()=>{
      console.log("Called!");
        const searchParams = {
            "gameName":"Fortnite",
            "directX":"Version 12",
            "description":"Fortnite Battle pass"
        }

        axios.get("http://localhost:8080/search",{
          //Something weird with CORS was going on here, but Stringifying it fixed it...idk
          params:{
            "searchArgs":JSON.stringify(searchParams)
          }
        }
        )
        .then((res)=>{
            console.log("Success!");
            console.log(res.data);
            setResults(res.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.error(`The following error occured: ${err}`);
            setLoading(false);
            setSuccess(false);
        })

        //Cleanup function
        return () =>{}
        },[]);
        
        

    return (
      <div className="flex flex-col">
        {
          !success ? 
          <ErrorLoading/>
          :
          loading ? 
          <Loader/>
          :
          <h1>Test</h1>
          // <div className="flex flex-col pt-5">
          //   <SearchBar searchResults={results} setSearchResults={setResults}/>
          //   <p>{results}</p>
          // </div>
        }
      </div>  
    );
}