import logo from "/images/logo.png"

function Lquestion(){
    return(
        <div className="my-[100px]">
            <div className="grid grid-cols-3">
                <div>
                   <div className="h-[390px] w-[300px] border rounded-xl my-[20px]">
                        <div className="flex flex-col m-[20px] space-y-[20px]">
                            <div className="border-b">
                                <p className="font-bold my-[10px] text-[20px]">Observations</p>
                            </div>
                            <div className="border-b">
                                <p className="my-[10px]">Auto-update</p>
                            </div>
                            <div className="border-b">
                                <p className="my-[10px]">Data</p>
                            </div>
                            <div className="border-b">
                                <p className="my-[10px]">Payment</p>
                            </div>
                            <div className="border-b">
                                <p className="my-[10px]">Support</p>
                            </div>
                        </div>
                   </div>
                </div>

                <div>
                    <div className="h-[430px] w-[300px] border rounded-xl">
                        <div className="flex flex-col m-[20px] space-y-[20px]">
                            <div className="border-b flex items-center justify-center">
                                <img className="cursor-pointer h-[40px] w-[70px] my-[10px]" src={logo} loading="lazy"/>
                            </div>
                            <div className="border-b">
                                <p className="my-[10px]">Auto-update</p>
                            </div>
                            <div className="border-b">
                                <p className="my-[10px]">Data</p>
                            </div>
                            <div className="border-b">
                                <p className="my-[10px]">Payment</p>
                            </div>
                            <div className="border-b">
                                <p className="my-[10px]">Support</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="h-[390px] w-[300px] border rounded-xl my-[20px]">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lquestion