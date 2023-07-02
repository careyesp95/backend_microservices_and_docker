function catchAsync(fn){
    return function(req,res,next){
        fn(req,res).catch(err => next(err))
    }
}

module.exports = catchAsync;