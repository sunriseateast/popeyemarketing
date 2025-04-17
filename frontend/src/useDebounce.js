import { useRef } from "react"

function useDebounce(){
    const timeoutRef=useRef(null)

    const debounce=(handler)=>{
        if(timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current=setTimeout(()=>{handler()},300)
    }

    return debounce

}

export default useDebounce