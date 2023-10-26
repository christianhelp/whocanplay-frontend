import { PacmanLoader } from "react-spinners";
import "../styles/Loader.css";


export default function Loader(){
    return (
        <div className="loader">
            <PacmanLoader
                color={"#8143a8"}
                size={50}
            
            />
        </div>
    )
}