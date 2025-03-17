import React from "react"
import Lherosec from "./LargeScreenhero/Lherosec"
import Sherosec from "./SmallScreenhero/Sherosec"

function Herofilter(){
    return(
        <div className="h-full w-full">
            <div className="md:hidden h-full w-full">
                <Sherosec/>
            </div>
            <div className="hidden md:grid h-full w-full">
                <Lherosec/>
            </div>
        </div>
    )
}

export default Herofilter