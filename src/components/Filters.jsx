//Filter options are going to be all of the potential things that we can filter by

import { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";
export default function Filters({filterOptions,searchParams,setSearchParams}){
     
    //Might need something to just handle the iteration process of these mfs

    const[checkBox,setCheckBox] = useState([]);

    const changeCheckBox = (state) =>{
        setCheckBox(state);
    }

    

    useEffect(()=>{
        console.log("Triggered! Value is:",checkBox);
        //State is a basic key-value pair that we use to change a value
        if (checkBox.length <= 0) return;

        //Retrieve keys
        const originKey = checkBox[0];
        const checkValue = checkBox[1];
        const valueofCheck = checkBox[2];
        
        if (checkValue){
            setSearchParams(new Map(searchParams.set(originKey,searchParams.get(originKey).add(valueofCheck))));
            console.log(searchParams.get(originKey));
        }
        else{
            const filteredSet = new Set([...searchParams.get(originKey)].filter(item=> item !== valueofCheck));
            setSearchParams(new Map(searchParams.set(originKey,filteredSet)));
            console.log(searchParams.get(originKey));
        }

        //Clean up Function
        return ()=>{}
    },[checkBox]);
    
    // console.log("Printing filter options:",filterOptions.get((checkBox.length >0)? checkBox[0]:"AZ"));
    
    return (
        //This needs to be sticky. Basically needs to stay in its own spot the entire time 
        <div className="flex flex-col bg-[#5c9ce6] pl-2 text-slate-50 rounded-lg w-56 h-auto">
            <h1 className=" text-3xl pb-10 pr-4">Filters</h1>
            
            <div className="flex flex-col">
                {filterOptions.entries().map((value,Originkey)=>{
                    <SearchFilter filterCategory={Originkey} filterEntries={value} checkBoxFunction={changeCheckBox}/>
                })}
            </div>
        </div>
    )
}
