import { useRef } from "react"

//Pass the value and the setter of our filter HashMap Into here so each one can be updated
export default function CheckBox({checkBoxTitle,checkBoxMapOrigin,checkBoxKey,toggleCheckBox}){
    const isChecked = useRef(false);
    //BIG NOTE: This may or may not cause the DOM to over-render. Be aware of this for later
    const handleCheckBoxChange = ()=>{
        isChecked.current = !isChecked.current;
        toggleCheckBox([checkBoxMapOrigin,isChecked.current,checkBoxKey]);
    }

    return(
<div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] pb-2">
    <input
        className=" relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white  checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04]  focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12]  focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white  dark:border-neutral-600 dark:checked:border-primary"
        type="checkbox"
        value=""
        id="checkboxDefault"
        onChange={handleCheckBoxChange}
    />
    <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer"
        htmlFor="checkboxDefault"
    >
        <h1>{checkBoxTitle}</h1>
    </label>
</div>


    )


}

