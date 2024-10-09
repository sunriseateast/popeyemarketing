import Header from "./components/Header.jsx"
import Menu from "./components/Menu.jsx"
import { useState } from "react"

function App() {
  let [hmopen,setHmopen]=useState(false)
  return (
    <div className="h-screen w-screen bg-[#06040D] text-white font-rubik">
      <Header isOpen={setHmopen}/>
      <Menu isOpen={hmopen} props={`bg-[#06040D] h-screen w-screen z-50 absolute content-center justify-items-center grid grid-row-4 gap-y-10 pb-40 text-xl font-medium bg-opacity-20 ${hmopen ? 'visibility-visible' :'md:hidden'}`}/>
      <div className={hmopen  ? "blur":'transition ease-in-out'}>  
        Hello
      </div>
    </div>  
  )
}

export default App
