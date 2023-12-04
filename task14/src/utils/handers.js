const MODE = "DEV";
export const catchAsyncError = callback => {
    return (req, res, errorCallBack) => {
        return Promise.resolve(callback(req, res, errorCallBack)).catch(
            errorCallBack
        );
    };
};

export const handleError = (err, req, res, next) => {
    console.log("in error", err);
    err.statusCode = err.statusCode || 500;
    if (!MODE)
        res.status(err.statusCode).json({
            success: false,
            errMessage: err.message,
            stack: err.stack,
            error: err
        });
    else
        res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
};
