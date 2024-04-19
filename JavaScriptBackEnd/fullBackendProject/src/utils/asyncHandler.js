const asyncHandler = (requestHandler)=>{
    return (
        (req, res, next)=>{
            Promise.resolve(requestHandler(req, res, next))
             // Reject part in catch
            .catch((error)=>next(error))
        }
    )
};



/*     or can also be written in try catch

const asyncHandler = (fn)=>async(req, res, next)=>{
    try {
        await fn(req, res, next)
        
    } catch (error) {
        res.status(error.code|| 500).json({
            success:false,
            merssage: error.merssage
        })
    }
}
*/
export {asyncHandler};