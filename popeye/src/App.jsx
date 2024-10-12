import Header from "./components/Header.jsx"
import { useState } from "react"

function App() {
  let [hmopen,setHmopen]=useState(false)
  return (
    <div className="h-screen w-screen bg-[#06040D] text-white font-rubik">
      <Header isOpen={setHmopen}/>
      <div className={hmopen  ? "blur":'transition ease-in-out'}>  
        Hello
      </div>
    </div>  
  )
}

export default App
