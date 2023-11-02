import "../styles/Game.css";

export default function Game(gameName,graphics,directX,processor,description,percent,imageURL,index){
    console.log(index);
    return(
        <div className="game" key={index}>
            <p>Game Name: {gameName}</p>
            <img src={imageURL} alt="default pic hehe" />
            <p>Description: {description}</p>
            <p>{percent} Can Play!</p>
            <p>Game Graphics: {graphics}</p>
            <p>Game Processor: {processor}</p>
            <p> DirectX: {directX}</p>
        </div>
    )
}