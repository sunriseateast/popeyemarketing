
function Refund(){
    return(
        <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px] my-[50px]">
                <p className="text-[40px]">Refund Policy</p>
                <p className="my-[10px]">
                    We do not offer refunds once a software license or service has been activated, 
                    delivered, or accessed, due to the digital nature of our products.
                    However,<br/>if you experience any technical issues with our software, 
                    our team will provide full support to resolve them.
                </p>
                <div className="grid grid-rows-2">
                    <div className="my-[20px]">
                        <p>Refunds may be considered only in the following exceptional cases:</p>
                        <ul className="list-disc list-inside my-[10px]">
                            <li>
                                If the software was not delivered after purchase.
                            </li>
                            <li>
                                If the software fails to function entirely and our support team is 
                                unable to resolve it within a reasonable time.
                            </li>
                            <li>
                                If a duplicate payment was made accidentally.
                            </li>
                        </ul>
                    </div>

                    <div className="my-[20px]">
                        <p>We do not provide refunds for:</p>
                        <ul className="list-disc list-inside my-[10px]">
                            <li>
                                Misuse of the software.
                            </li>
                            <li>
                                Violations of WhatsApp’s terms of service.
                            </li>
                            <li>
                                Feature limitations not explicitly mentioned on our website.
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Refund