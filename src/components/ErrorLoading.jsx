export default function ErrorLoading({errorMessage}){

    return (
        <div className=" flex flex-col text-4xl items-center justify-center pt-12 pb-12">
            <p>{errorMessage}</p>
        </div>
    );

}