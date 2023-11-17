import { Link } from "react-router-dom";

export default function GameCard({gameName,gameGraphics,directX,gameProcessor,gameDescription,gamePercent,imageURL,index}){
    const Game = {
        'gameName':gameName,
        'gameGraphics':gameGraphics,
        'directX':directX,
        'gameProcessor':gameProcessor,
        'gameDescription':gameDescription,
        'gamePercent':gamePercent,
        'imageURL':imageURL,
        'index':index
    }


    return (
        // FIXME: using relative and absolute overrides the narvbar. 
        <div className=" flex flex-col items-center max-w-sm max-h-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
            <img className="rounded-t-lg max-h-48 max-w-48" src={imageURL} alt="Default Image" />
            <div className="p-5">
                <h2 className="mb-3 py-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{gameName}</h2>
                <p className="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400">{gamePercent}% Can Play!</p>
                <Link to="/gameinfo" state={Game} className=" group text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Details
                    <svg className=" transition ease-in-out delay-100 group-hover:translate-x-3 w-6 h-5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}