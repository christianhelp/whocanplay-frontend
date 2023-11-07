import { useState,useEffect } from "react";
import {BiArrowFromBottom} from "react-icons/bi";
import { classNames } from "../utils/ClassNames";

export default function ScrollButton(){
    const [isVisible,setVisible] = useState(false);
    // Come back and look to see if we can change this to adjust to background
    const toggleVisibility = () =>{
        if (window.pageYOffset > 300){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    }

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    }


    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility);

        return ()=>{
            window.removeEventListener('scroll',toggleVisibility);
        }
    },[]);

    return (
        <div className="fixed bottom-2 right-2">
            <button type="button" onClick={scrollToTop} 
                className={classNames(
            isVisible ? 'opacity-100' : 'opacity-0',
            'bg-sky-50 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-black shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
            )}
            >
            <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}