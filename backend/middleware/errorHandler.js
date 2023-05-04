const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, nest) => {
    let statusCode = res.statusCode === 200 ? 500: res.statusCode
    let message = err.message

    // Check for Mongoose bad objectId (CastError)
    if (err.name === "CastError" && err.kind === "ObjectId") {
        message = "Resource not found"
        statusCode = 404
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? 'stack' : err.stack,
    })
}

export {notFound, errorHandler}