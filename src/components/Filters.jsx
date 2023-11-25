//Filter options are going to be all of the potential things that we can filter by

import { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import DropDown from "./DropDown";
//Character checking still

import { capitalizeFirstLetter } from "../utils/CharacterCasing";

export default function Filters({filterOptions,searchParams,setSearchParams}){
     
    //We want useStates for all of our drop down menus that will change

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
        <div className="flex flex-col bg-[#5c9ce6] text-slate-50 rounded-lg w-80 h-[100vh]">
            <h1 className=" text-4xl pr-4">Filters</h1>
            {/* What we want to do here instead is create a drop down under each category */}
            <div className="flex flex-col items-center">
                {filterOptions.map(([key,filterList])=>{
                    return (
                            <DropDown filterTitle={capitalizeFirstLetter(key)} filterValues={filterList} key={key} toggleCheckBox={changeCheckBox} checkBoxMapOriginKey={key}/>
                        )
                })}
                
            </div>
        </div>
    )
}
