import got from 'got'

export const Whatsapp=async(req,res,next)=>{
    try{
        if(req.method==="HEAD"){
            res.setHeader('Content-Type', 'application/octet-stream');
            res.setHeader('Content-Disposition','attachment');
            res.sendStatus(200)
        }
        const dropboxurl='https://www.dropbox.com/scl/fi/ftr097wdg7t7pmctlsvoa/Popeye-Master-Windows-3.5.0-Setup-x64.exe?rlkey=w83v7y2ivlywl27zi8qse3gk2&dl=1'
        const stream=got.stream(dropboxurl)

        stream.on('response',(response)=>{
            if(response.statusCode !==200){
                throw new Error("File not found")
            }
            else{
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
