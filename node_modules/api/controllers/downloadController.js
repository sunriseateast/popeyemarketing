import got from 'got'
import dotenv from 'dotenv'
dotenv.config()

const download=(url,res,next)=>{
        const awsurl=url
        const stream=got.stream(awsurl)
        res.cookie("success","true")
        
        stream.on('response',(response)=>{
            if(response.statusCode !==200){
                res.cookie("success","false")
                stream.destroy() //Destroy the stream to prevent hanging resources.
                const error=new Error("File not found")
                error.statusCode=400
                next(error)
            }
            else{
                res.setHeader('Content-Type','application/octet-stream');
                res.setHeader('Content-Disposition','attachment; filename=popeye-master.exe')
                stream.pipe(res)
            }
        })

        stream.on('error',(err)=>{  //While Streaming if anything happens this will happend
            res.cookie("success","false")
            stream.destroy()    //Destroy the stream to prevent hanging resources.
            const error=new Error("Streaming Error")
            error.statusCode=400
            next(error)
        })
}



export const Whatsapp=(req,res)=>{
    download(process.env.AWS_POPEYE_MASTER,res)
}
