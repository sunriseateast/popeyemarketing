
function Card2s({svgPath,innerText}){
    return(
        <div className="bg-[#4c585b33] m-[10px] p-[22px] rounded-xl card">
            <div className="flex items-center-justify-center">
                <div className="bg-[#4c585b33] h-[35px] w-[35px] rounded-[10px] innercard grid content-center justify-items-center">
                    <div className={`h-[20px] w-[20px]`}>
                        {svgPath}
                    </div>
                </div>
                <p className="text-center mt-[6px] ml-[8px] tracking-wider text-[15px]">{innerText}</p>
            </div>
        </div>   
    )
}

export default Card2s