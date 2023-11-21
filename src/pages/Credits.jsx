import DevProfile from "../components/DevProfile"
import christian_pfp from "../assets/christian_pfp.jpeg";
import lauren from "../assets/lauren.jpg"

export default function Credits(){

    return (
        <div className=" flex flex-col  items-center justify-center h-[80%] w-full pt-3">
            <h1 className=" text-6xl pb-10 pt-6">Meet the Devs!</h1>
            <div className="flex">
                <DevProfile name={"Christian Walker"} 
                bio={"Hi! My Name is Christian (he/him). I am a junior computer science student with a focus in software engineering. For this project, I created the entire frontend. I also assisted with the backend Spring boot server by creating multiple classes and laying out server logic for how the frontend and backend would communicate"}
                imageToRender={christian_pfp}
                />
                <DevProfile name={"Lauren Grissom"} 
                bio={"Hello, I'm Lauren! (she/her). I'm a senior at UTSA. I'm studing CS with a focus in Cybersecurity. I helped Christian and Caroline here and there with the design of the front and backend respectively. Overall, my favorite part of this project was developing the algorithm that would evaluate the data."}
                imageToRender={lauren}
                />
                <DevProfile name={"Caroline Oliver"} 
                bio={"I'm Caroline (she/they) and I'm a Senior at UTSA, majoring in Computer Science. I will be returning to JP Morgan Chase and Co. next year, so I'm focusing on my software engineering skills, primarily in backend system design. For this project, I focused on building the dataset we use that's at the core of our project."}
                imageToRender={"https://media.licdn.com/dms/image/D5603AQGpa63DXX1lAQ/profile-displayphoto-shrink_200_200/0/1674074426434?e=1706140800&v=beta&t=nFhumGb6zh8rfbOSuhkaASgwI2-jkqrMZAYoW-sVt8s"}
                />
            </div>
        </div>


    )


}