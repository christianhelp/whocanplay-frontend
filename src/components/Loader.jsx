import { PacmanLoader } from "react-spinners";
import "../styles/Loader.css";


export default function Loader(){
    return (
        <div className="loader">
            <PacmanLoader
                color={"#5c9ce6"}
                size={50}
                // loading={false}
            />
        </div>
    )
}