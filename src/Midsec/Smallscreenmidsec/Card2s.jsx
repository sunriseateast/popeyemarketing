import Bug from "../../svg/Bug.jsx"


function Card2s({svgPath,innerText}){
    return(
        <div className={`p-[2px]`}>
            <div className="bg-[#4c585b33] m-[10px] p-[18px] rounded-xl card w-[250px]">
                <div className="flex items-center-justify-center">
                    <div className="bg-[#4c585b33] h-[40px] w-[40px] rounded-[10px] innercard grid content-center justify-items-center">
                        <div className={`max-h-[25px] max-w-[25px]`}>
                            {svgPath}
                        </div>
                    </div>
                    <p className="break-all text-center mt-[6px] ml-[8px] tracking-wider text-[15px]">{innerText}</p>
                </div>
            </div>   
        </div>   
    )
}

export default Card2s