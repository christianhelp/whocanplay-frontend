import "../styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ErrorLoading from "../components/ErrorLoading";

export default function Explore(){
  const [loading,setLoading] = useState(true);
  const [results,setResults] = useState("Making call, please wait...");
  const[success,setSuccess] = useState(true);
    // At the begginning, I could simply display the stuff from the explore page and then provide them an option to search
    // {"gameName":"Fortnite","directX":"Version 12","description":"Fortnite Battle pass"}
    useEffect( ()=>{
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
          <div>
            <h1>
            Search Page!
            </h1>
            <p>{results}</p>
          </div>
        }
      </div>  
    );
}