import "../styles/NoPage.css";
import DizzyRobot from "../assets/dizzy-robot.png";

export default function NoPage(){
    return (
        <div className="nopage">
            <h1>
                Error! No page here!
            </h1>
            {/*Image Credit: "https://www.flaticon.com/free-icons/error"*/}
            <img src={DizzyRobot}></img>
            <h1>(Skill Issue tbh) </h1>
        </div>
    )
}