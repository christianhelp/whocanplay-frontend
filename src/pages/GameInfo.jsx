import { useLocation } from 'react-router-dom'
import brokenController from "../assets/broken-controller.png";

export default function GameInfo(){

    const location = useLocation();
    const Game = location.state;

    return (
        //Come back and pretty this
        <div>
           {
            // Handles if someone attempts to go directly to the route
            Game ? 
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl pt-8 pb-2'>{Game.gameName}</h1>
                <div className='flex  items-center justify-center pt-12'>
                    <div className='flex flex-col pr-8 justify-center items-center'>
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