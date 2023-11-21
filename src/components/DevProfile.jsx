

export default function DevProfile({imageToRender,bio,name}){
    return (
         <div className="flex flex-col pt-4 pl-6 pr-6 h-full w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className=" mb-3 py-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h1>
            <img className=" mx-auto pb-4 rounded-t-lg max-h-48 max-w-48" src={imageToRender} alt="Dev Image" />
            <p className=" my-auto text-left mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400">{bio}</p>
        </div>
    )
}