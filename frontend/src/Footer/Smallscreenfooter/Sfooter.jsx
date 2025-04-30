import logo from "/images/logo.png"
import { Link } from "react-router-dom"

function Sfooter(){
    return(
        <div className="my-[50px]">
           <div className="my-[50px]">
                <div className="grid grid-cols-2 space-x-[60px]">
                    <div className="flex flex-col space-y-[10px]">
                        <Link to='/conditions'>
                            <p>Terms & Conditions</p>
                        </Link>
                        <p>Privacy & policy</p>
                        <p>Refund Policy</p>
                    </div>
                    <div className="flex flex-col space-y-[10px]">
                        <p>About Us</p>
                        <Link to='/softwares'>
                            <p>Softwares</p>
                        </Link>
                        
                        <Link to='/support'>
                            <p>Support</p>
                        </Link>

                        <Link to='/reseller'>
                            <p>Reseller</p>
                        </Link>

                        <Link to='/book_a_demo'>
                            <p>Book a Demo</p>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-rows-2 my-[20px]">
                    <p>
                        <Link to="/">
                            <img className="h-[40px] w-[70px]" src={logo} loading="lazy"/>
                        </Link>
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