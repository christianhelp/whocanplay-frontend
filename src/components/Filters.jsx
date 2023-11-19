//Filter options are going to be all of the potential things that we can filter by

import { useState, useEffect } from "react";
import CheckBox from "./CheckBox";

//Character checking still

import { capitalizeFirstLetter } from "../utils/CharacterCasing";

export default function Filters({filterOptions,searchParams,setSearchParams}){
     
    //Might need something to just handle the iteration process of these mfs

    const[checkBox,setCheckBox] = useState([]);
    
    const changeCheckBox = (state) =>{
        setCheckBox(state);
    }


    

    useEffect(()=>{
        //State is a basic key-value pair that we use to change a value
        if (checkBox.length <= 0) return;

        //Retrieve keys
        const originKey = checkBox[0];
        const checkValue = checkBox[1];
        const valueofCheck = checkBox[2];
        
        if (checkValue){
            setSearchParams(new Map(searchParams.set(originKey,searchParams.get(originKey).add(valueofCheck))));
            console.log(searchParams);
        }
        else{
            const filteredSet = new Set([...searchParams.get(originKey)].filter(item=> item !== valueofCheck));
            setSearchParams(new Map(searchParams.set(originKey,filteredSet)));
            console.log(searchParams);
        }
        //Clean up Function
        return ()=>{}
    },[checkBox]);
    
    
    return (
        //This needs to be sticky. Basically needs to stay in its own spot the entire time 
        <div className="flex flex-col bg-[#5c9ce6] pl-2 text-slate-50 rounded-lg w-60 h-auto">
            <h1 className=" text-3xl pb-10 pr-4">Filters</h1>
            
            <div className="flex flex-col ">
                {filterOptions.map(([key,filterList])=>{
                    return (<div className="flex flex-col items-start" key={key}>
                        <h1 className="pl-4 text-xl font-bold pb-3 ">{capitalizeFirstLetter(key)}</h1>
                        <ul className="">
                            {filterList.map((item,index)=>{
                                return (<CheckBox key={index} checkBoxTitle={item} checkBoxMapOrigin={key} checkBoxKey={item} toggleCheckBox={changeCheckBox}/>)
                        })}
                        </ul>
                    </div>)
                })}
            </div>
        </div>
    )
}
