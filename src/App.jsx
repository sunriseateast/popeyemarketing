import Header from "./Header/Header.jsx";
import Herofilter from "./HeroSection/Herofilter.jsx";
import { useState } from "react";


function App() {
  let [hmopen,setHmopen]=useState(false)
  return (
    <div className="bg-[#06040D] font-archivo min-h-screen w-full">
        <div className="relative z-10 ">
          <Header isOpen={setHmopen}/>
        </div>
        <div className={`relative z-0 text-[#F5F5F4] ${hmopen  ? "blur":'transform-gpu transition-all ease-in-out'}`}>
          <div className="h-full w-full">  
            <Herofilter/>
          </div>
        </div>
        <div className="text-[100px] text-slate-100">
          Hello
        </div>
    </div>  
  )
}

export default App