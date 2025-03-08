import React,{useRef,useEffect} from 'react';

function Rating({nostars}){
    let stars=useRef(null)
    
    useEffect(()=>{
        if(stars.current){
            let child=stars.current.children[nostars-1]
            while(child){
                child.setAttribute("fill","#FFA725")
                child=child.previousElementSibling
            }
        }
    },[])

    return(
        <svg ref={stars} fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 90 30">
            <g>
                <polygon className="st0" points="14.3,22.5 10,19.8 5.7,22.4 6.5,16.8 3.1,12.9 7.9,12.1 10.1,7 12.2,12.1 17.1,13 13.5,16.9"/>
            </g>
            <g>
                <polygon className="st0" points="32.3,22.5 28,19.8 23.7,22.4 24.5,16.8 21.1,12.9 25.9,12.1 28.1,7 30.2,12.1 35.1,13 31.5,16.9"/>
            </g>
            <g>
                <polygon className="st0" points="49.6,22.4 45.3,19.8 41,22.4 41.8,16.8 38.4,12.8 43.2,12.1 45.4,7 47.6,12.1 52.4,12.9 48.9,16.9"/>
            </g>
            <g>
                <polygon className="st0" points="67.5,22.4 63.2,19.8 58.8,22.4 59.7,16.8 56.2,12.8 61.1,12 63.3,7 65.4,12.1 70.3,12.9 66.7,16.8"/>
            </g>
            <g>
                <polygon className="st0" points="84.3,22.1 80,19.4 75.7,22 76.5,16.4 73.1,12.5 77.9,11.7 80.1,6.6 82.2,11.7 87.1,12.6 83.5,16.5"/>
            </g>
        </svg>

    )
}

export default Rating