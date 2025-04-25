import "../Midsec.css"
import Bug from "../../svg/Bug"

function Card2({svgPath,innerText,borderCss}){
    return(
        <div className={`p-[40px] border-[#1D1616] hover:border-[#3C3D37] rounded-xl ${borderCss}`}>
            <div className="bg-[#4c585b33] m-[10px] p-[22px] rounded-xl card">
                <div className="flex items-center-justify-center">
                    <div className="bg-[#4c585b33] h-[40px] w-[40px] rounded-[10px] innercard grid content-center justify-items-center">
                        <div className={`${svgPath.type === Bug ? 'h-[32px] w-[32px]' :'h-[25px] w-[25px]'}`}>
                            {svgPath}
                        </div>
                    </div>
                    <p className="text-center mt-[6px] ml-[8px] tracking-wider">{innerText}</p>
                </div>
            </div>   
        </div>
    )
}
export default Card2