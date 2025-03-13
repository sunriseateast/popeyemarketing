import Header from "./Header/Header.jsx";
import Herofilter from "./HeroSection/Herofilter.jsx";
import { useState } from "react";


function App() {
  let [hmopen,setHmopen]=useState(false)
  return (
    <div className="bg-[#06040D] font-archivo h-screen w-screen">
        <div className="relative z-10">
          <Header isOpen={setHmopen}/>
        </div>
        <div className={`h-[552px] w-full flex justify-center relative z-0 text-[#F5F5F4] ${hmopen  ? "blur":'transform-gpu transition-all ease-in-out'}`}>
          <div className="h-full w-full">  
            <Herofilter/>
          </div>
        </div>
    </div>  
  )
}

export default App