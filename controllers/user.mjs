import { readFile, writeFile } from 'node:fs/promises'

const registerController = async (req, res, next) => {
  // input check
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.statusCode = 400
    return res.json({ error: "input is not valid" })
    // throw new Error(JSON.stringify({ error: "input is not valid" }))
  }

  // db file read
  const fileDataStr = await readFile("./db.json", {
    encoding: 'utf-8'
  })
  // parser string to json object
  const fileData = JSON.parse(fileDataStr)

  // user data object
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  // check if user already registered
  if (fileData.users.filter((e) => {
    return e.email === userData.email
  }).length > 0) {
    res.statusCode = 400
    return res.json({ error: "user already registered" })
  }

  // user data added to json data
  fileData.users.push(userData)

  // db json update
  await writeFile("./db.json", JSON.stringify(fileData))

  // send response
  res.json({ message: "register successful" })
}

const loginController = (req, res, next) => {
  res.json({ message: "login not implemented" })
}

export { registerController, loginController }