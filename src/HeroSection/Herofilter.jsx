import React from "react"
import Lherosec from "./LargeScreenhero/Lherosec"

function Herofilter(){
    if(window.innerWidth >= 768){
        return(
            <div className="h-full w-full">
                <Lherosec/>
            </div>
        )
    }
}

export default Herofilter