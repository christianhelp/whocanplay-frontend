import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import {AnimatePresence, motion} from "framer-motion"


export default function VramDropDown(props){
    const[isOpen,setIsOpen] = useState(false);
    //Create request function (first we will have to fix the backend to accomodate this)
    //why?
    const[playabilityTitle,setplayabilityTitle] = useState(props.filterTitle);
    
    const vramRanges = ['1-2 GB','3-4 GB','5-6 GB','7-8 GB','9+ GB']
    const handleDropChange = ()=>{
        console.log("Filler");
    }
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
                className="overflow-y-auto origin-top bg-slate-400 flex flex-col rounded-lg  w-full h-24 ">
                {
                    vramRanges.map((range,index,arr)=>{
                        return (
                        <div className="flex justify-start w-full mb-[0.125rem] hover:bg-slate-300 font-semibold rounded" key={index}>
                           <div className="w-full">
                             <button className='w-full'onClick={handleDropChange} align='left'>
                                <h1 className='pl-2' align='left'>{range}</h1>
                            </button>
                           </div>
                        </div>)
                    })
                }
                </motion.div>
            }
            </AnimatePresence>  
        </div>
    )

}