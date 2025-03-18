import Header from "./Header/Header.jsx";
import Herofilter from "./HeroSection/Herofilter.jsx";
import { useState } from "react";
import Midsecfilter from "./Midsec/Midsecfilter.jsx";


function App() {
  let [hmopen,setHmopen]=useState(false)
  return (
    <div className="bg-[#06040D] font-archivo min-h-screen w-full">
        <div className="relative z-10 ">
          <Header isOpen={setHmopen}/>
        </div>
        <div className={`flex flex-col items-center relative z-0 text-[#F5F5F4] ${hmopen  ? "blur":'transform-gpu transition-all ease-in-out'}`}>
          <div>  
            <Herofilter/>
          </div>
          <div className="text-slate-100">
            <Midsecfilter/>
          </div>
        </div> 
    </div>  
  )
}

export default App