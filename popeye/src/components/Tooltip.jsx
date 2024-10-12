
function Tooltip({value}){
    if(value==='Softwares'){
        return(
            <div className="absolute right-0 bg-white text-black w-80 h-48">Hello Roshan </div>
        )
    }
    else if(value==='Reseller'){
        return(
            <div className="absolute -right-16 bg-white text-black w-80 h-48">Hello Roshan </div>
        )
    }
    else if(value==='Support'){
        return(
            <div className="absolute -left-16 bg-white text-black w-80 h-48">Hello Roshan </div>
        )
    }
    else if(value==='Book a Demo'){
        return(
            <div className="absolute left-0 bg-white text-black w-80 h-48">Hello Roshan </div>
        )
    }
}
export default Tooltip