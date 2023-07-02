function catchAsync(fn) {
  return (req, res, next) => {
    fn(req, res).catch((err)=>{
        return next({
            status: 500,
            message: err.message,
        })
    });
  };
}

module.exports = catchAsync;