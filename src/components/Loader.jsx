import { PacmanLoader } from "react-spinners";

export default function Loader(){
    return (
        <div className="flex h-full w-auto justify-center items-center pt-[10%] pl-[30%] pr-[30%]">
            <PacmanLoader
                color={"#5c9ce6"}
                size={50}
            />
        </div>
    )
}