import React from "react"
import Lherosec from "./LargeScreenhero/Lherosec"

function Herofilter(){
    //from tablet landscape this will happend
    
    if(window.innerWidth >= 1024){
        return(
            <div className="h-full w-full">
                <Lherosec/>
            </div>
        )
    }
}

export default Herofilter