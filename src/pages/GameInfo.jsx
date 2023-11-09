

export default function GameInfo(...args){

    return (
        
        <div>
            {
                args? 
                <p>TEST!</p>
                :
                <p>Error! No args provided</p>
            }
            
        </div>
    )

}