import CheckBox from "./CheckBox";

import {AiOutlineCaretDown} from "react-icons/ai";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion"

export default function DropDown(props){
    const[isOpen,setIsOpen] = useState(false);

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

    //We will add vram along with a few other things

    return (
        <div className="relative flex flex-col items-center w-80 h-80 rounded-lg">
            <button 
            onClick={()=>setIsOpen((prev)=>!prev)}
            className=" border-b-4 border-bg-slate-400 p-4 w-auto flex items-center justify-between font-bold text-lg rounded-sm tracking-wider">
               {props.filterTitle}
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
                
                className=" origin-top bg-slate-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-[70%] justify-between ">
                    {
                        props.filterValues.map((item,index)=>{
                            return (<CheckBox key={index} checkBoxTitle={item} checkBoxMapOrigin={props.checkBoxMapOriginKey} checkBoxKey={item} toggleCheckBox={props.toggleCheckBox}/>)
                        })
                    }

                </motion.div>
            }
            </AnimatePresence>
            
        </div>
    )
}