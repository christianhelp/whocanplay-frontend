import "../styles/App.css";
import "../styles/HomePage.css";
import { useEffect,useState } from "react";
import Loader from "../components/Loader";

export default function HomePage(){
    const [loading,setLoading] = useState(true);

    useEffect((()=>{
        setTimeout(()=>{
            setLoading(false);
        },1000);
        return () => {};
    }
    ),[]);
    return (
        <div className='homepage'>
            {
                loading ? 
           <Loader/>
            :
           <div className="intro">
            <h1 className="introtitle">Who Can Play?</h1>
            <h3 className="steam">Powered by Steam Hardware Survey</h3>
            </div>

    }
        </div>
            
    );
}