import CheckBox from "./CheckBox";

import {AiOutlineCaretDown} from "react-icons/ai";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion"
import VramDropDown from "./VramDropDown";

export default function DropDown(props){
    const[isOpen,setIsOpen] = useState(false);
    
    const[playabilityTitle,setplayabilityTitle] = useState(props.filterTitle);
    console.log(playabilityTitle);
    //Variables of styling for the menu dropdowns 
    const menuVars = {
        initial:{
            scaleY:0
        },
        animate:{
            scaleY:1,
            transition:{
                duration:0.2,
                ease:[0.12,0,0.39,0]
            }
        },
        exit:{
            scaleY:0,
            transition:{
                duration:0.2,
                ease:[0.22,1,0.36,1]
            }
        }
    }

    return (
        <div className=" pt-24 border-b-4 border-bg-slate-400  relative flex flex-col items-center w-full h-auto">
            <button 
            onClick={()=>setIsOpen((prev)=>!prev)}
            className="  w-auto h-auto flex items-center justify-between font-bold text-lg rounded-sm tracking-wider">
               {playabilityTitle}
                {
                    !isOpen ? <AiOutlineCaretDown className=" h-8 duration-200"/> : <AiOutlineCaretDown className="h-8 transform rotate-180 duration-300"/>
                }
            </button>
            <AnimatePresence>
                {
                isOpen && 
                <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="overflow-y-auto origin-top bg-slate-400 top-20 flex flex-col items-start rounded-lg  w-full h-24 ">
                    
    {props.filterValues.map((item, index) => (
        !(props.filterTitle === "Playability") ? (
            <CheckBox key={index} checkBoxTitle={item} checkBoxMapOrigin={props.checkBoxMapOriginKey} checkBoxKey={item} toggleCheckBox={props.toggleCheckBox} makeDropDownSearchRequest={props.makeDropDownSearchRequest}/>
        ) : (
            <OrderByDropDown key={index} title={item} changePlayibilityFilter={props.changePlayibilityFilter} changePlayibilityTitle={setplayabilityTitle} changeIsOpen={setIsOpen} makeDropDownSearchRequest={props.makeDropDownSearchRequest}/>
        )
    ))
}
                </motion.div>
            }
            </AnimatePresence>
            
        </div>
    )
}

export function OrderByDropDown({title,changePlayibilityFilter,changePlayibilityTitle,changeIsOpen,makeDropDownSearchRequest}){
    const handleDropChange = ()=>{
        // changePlayibilityFilter(title);
        changePlayibilityTitle(title);
        changeIsOpen(false);
        makeDropDownSearchRequest(title);
        //Make our search request using our axios shii

    }

    return(
<div className=" w-full mb-[0.125rem] flex pl-[2rem] hover:bg-slate-300 font-semibold rounded ">
    <button onClick={handleDropChange}>
        {title}
    </button>
</div>
    )
}
