import "../styles/App.css";
import "../styles/Search.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Explore(){
  const [results,setResults] = useState("Making call, please wait...");

    useEffect( ()=>{
        
        axios.get("http://localhost:8080/search")
        .then((res)=>{
            console.log("Success!");
            setResults(res.data);
        })
        .catch((err)=>{
            console.error(`The following error occured: ${err}`);
        })
        },[]);
    return (
      <div className="search">
        <h1>
            Search Page!
        </h1>
        <p>{results}</p>
      </div>  
    );
}