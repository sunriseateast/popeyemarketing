import Header from "./Header/Header.jsx";
import Herofilter from "./HeroSection/Herofilter.jsx";
import { useState } from "react";


function App() {
  let [hmopen,setHmopen]=useState(false)
  return (
    <div className="bg-[#06040D] font-archivo h-screen w-screen flex flex-col">
        <div className="relative z-10">
          <Header isOpen={setHmopen}/>
        </div>
        <div className={`h-full w-full relative z-0 text-[#F5F5F4] ${hmopen  ? "blur":'transform-gpu transition-all ease-in-out'}`}>  
          <Herofilter/>
        </div>
    </div>  
  )
}

export default App
