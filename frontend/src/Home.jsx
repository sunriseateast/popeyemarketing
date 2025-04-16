import Herofilter from "./HeroSection/Herofilter.jsx";
import Midsecfilter from "./Midsec/Midsecfilter.jsx";
import Midsec2filter from "./Midsec2/Midsec2filter.jsx";
import Lightweightfilter from "./Lightweight/Lightweightfilter.jsx";
import Hustlefilter from "./Hustle/Hustlefilter.jsx";
import Ideafilter from "./Idea/Ideafilter.jsx";
import Questionfilter from "./Question/Questionfilter.jsx";
import { useOutletContext } from 'react-router-dom';

function Home(){
  const hmopen=useOutletContext()
  
    return(
        <div className="text-[#F5F5F4]">
            <div className="h-full w-full md:grid content-center justify-center hero">
            <div className="mx-[20px]">
              <Herofilter/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
              <Midsecfilter open={hmopen}/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center bg-[#1A1A1D] gradient">
            <div className="mx-[20px]">
              <Midsec2filter/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
              <Lightweightfilter/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
              <Hustlefilter/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center bg-[#1A1A1D]">
            <div className="mx-[20px]">
              <Ideafilter/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
              <Questionfilter/>
            </div>
          </div>
        </div>
    )
}

export default Home