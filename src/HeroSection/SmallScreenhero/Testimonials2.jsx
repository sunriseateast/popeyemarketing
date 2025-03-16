import reviews from "../Reviews";
import Testcard2 from "./Testcard2";

function Testimonials2(){
    let elements=[]

     //Testimonials
    let testcontent=reviews

    for(let i = 0 ;i < 10; i++){
        elements.push(
            <Testcard2
            key={i} 
            name={testcontent[i].name} 
            message={testcontent[i].message} 
            stars={testcontent[i].nostars}
            imgpath={testcontent[i].img}
        />
        )
    }

    return(
        <div className="scrollbar-none top2">
            <div className="flex flex-col items-center justify-center will-change-transform">
                <div className="scroll flex flex-col gap-y-[10px] will-change-transform mt-[10px]">
                   {elements}
                </div>
                <div className="scroll flex flex-col gap-y-[10px] will-change-transform mt-[10px]">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default Testimonials2;