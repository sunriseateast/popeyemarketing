import { useRef } from "react"

function useDownloadFile(){
    const timer=useRef(null)

    const downloadfile=(path)=>{
        return new Promise((resolve)=>{
            if(timer.current) clearTimeout(timer.current)
                const iframe=document.createElement('iframe')
                iframe.src=path
                iframe.style.display='none'
                document.body.appendChild(iframe)
                timer.current=setTimeout(()=>{
                    document.body.removeChild(iframe)
                    const isAvailable=document.cookie.split(';').find(row=>row.startsWith(' success'))
                    const value=isAvailable.split('=')
                    resolve(value[1]=='true')
                },1000)
        })
    }

    return downloadfile
}

export default useDownloadFile