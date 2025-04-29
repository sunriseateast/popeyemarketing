
export const errorHandler=(err,req,res,next)=>{
    console.log("Error Caught:",err.message)

    res.status(err.statusCode || 500).json({
        sucess:false,
        message:err.message || "Internal Server error"
    })
}