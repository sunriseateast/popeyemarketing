import Header from "./components/Header.jsx"
import { useState } from "react"

function App() {
  let [hmopen,setHmopen]=useState(false)
  return (
    <div className="h-screen w-screen bg-[#06040D] font-archivo">
      <Header isOpen={setHmopen}/>
      <div className={`text-white ${hmopen  ? "blur":'transition-all ease-in-out'}`}>  
        Hello
      </div>
    </div>  
  )
}

export default App
