import CheckBox from "./CheckBox";

import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai";
import { useState } from "react";

export default function DropDown(props){
    const[isOpen,setIsOpen] = useState(false);


    return (
        <div className="relative flex flex-col items-center w-80 h-80 rounded-lg">
            <button 
            onClick={()=>setIsOpen((prev)=>!prev)}
            className=" border-b-4 border-bg-slate-400 p-4 w-auto flex items-center justify-between font-bold text-lg rounded-sm tracking-wider">
               {props.filterTitle}
                {
                    !isOpen ? <AiOutlineCaretDown className="h-8"/> : <AiOutlineCaretUp className="h-8"/>
                }
            </button>
            {
                isOpen && 
                <div className="absolute top-20  flex flex-col items-start rounded-lg p-2 w-[70%] justify-between ">
                    {
                        props.filterValues.map((item,index)=>{
                            return (<CheckBox key={index} checkBoxTitle={item} checkBoxMapOrigin={props.checkBoxMapOriginKey} checkBoxKey={item} toggleCheckBox={props.toggleCheckBox}/>)
                        })
                    }

                </div>
            }
        </div>
    )
}