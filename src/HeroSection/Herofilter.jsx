import React from "react"
import Lherosec from "./LargeScreenhero/Lherosec"
import Sherosec from "./SmallScreenhero/Sherosec"

function Herofilter(){
    //from tablet landscape this will happend
    
    if(window.innerWidth >= 1024){
        return(
            <div className="h-full w-full">
                <Lherosec/>
            </div>
        )
    }
    else{
        return(
            <div className="h-full w-full">
                <Sherosec/>
            </div>
        )
    }
}

export default Herofilter