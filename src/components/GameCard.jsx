export default function GameCard(gameName,gameGraphics,directX,gameProcessor,gameDescription,gamePercent,imageURL,index){

    return (
        <div className="flex flex-col items-center max-w-sm max-h-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
            <img className="rounded-t-lg max-h-48 max-w-48" src={imageURL} alt="Default Image" />
            <div className="p-5">
                <h2 className="mb-3 py-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{gameName}</h2>
                <p className="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400">{gamePercent} Can Play!</p>
                <b className="text-2xl">About</b>:
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-200"> {gameDescription}</p>
                <b>Minimum Graphics</b>:
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-200"> {gameGraphics}</p>
                <b>Minimum Processor</b>:
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-200"> {gameProcessor}</p>
                <b>DirectX Version</b>:
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-200"> {directX}</p>
            </div>
        </div>
    )
}