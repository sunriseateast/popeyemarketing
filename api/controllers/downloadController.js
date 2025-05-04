import got from 'got'
import dotenv from 'dotenv'
dotenv.config()

export const Whatsapp=async(req,res,next)=>{
    try{
        if(req.method==="HEAD"){
            return res.sendStatus(200)
        }
        const awsurl=process.env.AWS_POPEYE_MASTER
        const stream=got.stream(awsurl)

        stream.on('response',(response)=>{
            if(response.statusCode !==200){
                throw new Error("File not found")
            }
            else{
                res.setHeader('Content-Type','application/octet-stream');
                res.setHeader('Content-Disposition','attachment; filename=popeye-master.exe')
                stream.pipe(res)
            }
        })

        stream.on('error',(err)=>{  //While Streaming if anything happens this will happend
            res.destroy()
            throw new Error(err)
        })
    }
    catch(error){
        error.statusCode=400
        next(error)
    }
}
