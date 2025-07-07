const globalMiddleware = (req, res, next) => {
  req.name = "apple"
  console.log("global middleware apple")
  next();
}


const localMiddleware = (req, res, next) => {
  console.log("local files middleware")
  next()
}

export { globalMiddleware, localMiddleware }