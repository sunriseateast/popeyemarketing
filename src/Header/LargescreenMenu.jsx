import {Link} from 'react-router-dom';
function LargescreenMenu({value}){

    //Function to pass value for lg screen
    function moenter(title){
        if(value){
            value(title)
        }
    }

    const lgscreen=`md:opacity-100 md:z-10 md:p-[10px] md:m-[10px] md:text-base md:border-none`
    return(
        <nav>
            <Link to="/softwares" className={`${lgscreen}`}>Softwares</Link>
            <Link to="/reseller" className={`${lgscreen}`}>Reseller</Link>
            <Link to="/support" className={`${lgscreen}`}>Support</Link>
            <Link to="/book_a_demo" className={`${lgscreen} bg-slate-100 rounded text-black`}>Book a Demo</Link>
        </nav>
    )
}

export default LargescreenMenu