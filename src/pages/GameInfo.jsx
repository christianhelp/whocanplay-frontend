import { Link, useLocation } from 'react-router-dom'
import brokenController from "../assets/broken-controller.png";

export default function GameInfo(){

    const location = useLocation();
    const Game = location.state;

    return (
        //FIXME: Come back and pretty this :)
        <div>
           {
            // Handles if someone attempts to go directly to the route
            Game ? 
            <div className=' pl-24 flex flex-col items-center justify-center'>
                <h1 className='text-6xl pt-8 pb-2'>{Game.gameName}</h1>
                <div className='flex  items-center justify-center pt-12 pr-8'>
                    {/* This really needs to be fixed to the left side */}
                    <div className='flex pr-7'>
                        <Link to="/explore" className=" group text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className=" -scale-x-100 pl-4 transition ease-in-out delay-100 group-hover:-translate-x-4 w-8 h-6 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        Explore
                        </Link>
                    </div>
                    <div className='flex flex-col pr-8 pb-4 justify-center items-center'>
                        <div className='pb-48'>
                            <p className='text-6xl'>{Game.gamePercent} Can Play!</p>
                        </div>
                        <div className='pb-6'>
                            <b className='text-3xl'>Minimum Graphics:</b>
                            <p className=" font-normal text-gray-700 dark:text-gray-200"> {Game.gameGraphics}</p>
                        </div>

                        <div className='pb-6'>
                            <b className='text-3xl'>Minimum Processor:</b>
                            <p className="font-normal text-gray-700 dark:text-gray-200"> {Game.gameProcessor}</p>
                        </div>
                        <div>
                            <b className='text-3xl'>DirectX Version:</b>
                            <p className=" font-normal text-gray-700 dark:text-gray-200"> {Game.directX}</p> 
                        </div>
                    </div>

                    <div className='flex flex-col pl-40 justify-center items-center'>
                        <img className=' max-w-xs' src={Game.imageURL} alt="" />
                        <b className="text-2xl">About:</b>
                        <p className="mb-3  max-w-sm font-normal text-gray-700 dark:text-gray-200"> {Game.gameDescription}</p>
                    </div> 

                </div>
            </div>
            :
            <div className='flex flex-col justify-center items-center p-10 '>
                <h1 className="pb-6">Error! Game Info Not Found!</h1>
                <img className=" pb-6 w-28 h-28"src={brokenController} alt="" />
                <p className="pb-6">If this is an error, we will work to fix it soon!</p>
            </div>
           }




        </div>
    )



}