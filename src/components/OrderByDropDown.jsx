export default function OrderByDropDown({title,changePlayibilityTitle,changeIsOpen,makeDropDownSearchRequest}){
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