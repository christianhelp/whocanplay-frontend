import DizzyRobot from "../assets/dizzy-robot.png";

export default function NoPage(){
    return (
        <div className="flex flex-col text-3xl items-center justify-center m-5 pt-5">
            <h1 className="pb-10">
                Error! No page here!
            </h1>
            {/*Image Credit: "https://www.flaticon.com/free-icons/error"*/}
            <img className="pb-8" src={DizzyRobot}></img>
            <h1>(Skill Issue tbh) </h1>
        </div>
    )
}