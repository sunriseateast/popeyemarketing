import logo from "/images/logo.png"

function Sfooter(){
    return(
        <div className="my-[50px]">
           <div className="my-[50px]">
                <div className="grid grid-cols-2 space-x-[60px]">
                    <div className="flex flex-col space-y-[10px]">
                        <p>Terms & Conditions</p>
                        <p>Privacy & policy</p>
                        <p>Refund Policy</p>
                    </div>
                    <div className="flex flex-col space-y-[10px]">
                        <p>About Us</p>
                        <p>Support</p>
                        <p>Reseller</p>
                        <p>Book a Demo</p>
                    </div>
                </div>
                <div className="grid grid-rows-2 my-[20px]">
                    <p>
                        <a href="https://www.google.com/">
                            <img className="h-[40px] w-[70px]" src={logo} loading="lazy"/>
                        </a>
                    </p>
                    <div className="flex self-end">
                        <p className="text-zinc-600">
                            Users must read discalmier of the software
                            before proceeding.as each softwares comes with 
                            different features and functions.
                        </p>
                    </div>
                </div>
                <div className="mt-[50px] border-t border-zinc-800">
                    <p className="mt-[30px]">© popeyemarketing. All rights reserved, 2025</p>   
                </div>
           </div>
        </div>
    )
}

export default Sfooter