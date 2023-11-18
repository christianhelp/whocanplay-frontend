//Filter options are going to be all of the potential things that we can filter by

export default function Filters({filterOptions,setfilterOptions}){
     
    //Upon recieveing, we need to put all of these in their categories
    //We can also set up a begins with filter
    console.log(filterOptions);
    return (
        //This needs to be sticky. Basically needs to stay in its own spot the entire time 
        <div className="flex flex-col">
            <ul>
                <li>Test</li><li>Test</li><li>Test</li>

            </ul>
        </div>
    )
}
