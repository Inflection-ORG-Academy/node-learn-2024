import 'dotenv/config'
import express from 'express';
import { registerController, loginController, forgotPasswordController } from './controllers/user.mjs'
import { prizeController } from './controllers/prize.mjs'
import { globalMiddleware, authMiddleware } from './middleware.mjs';
import { errorController, undefinedRouteHandler } from './error.mjs';
const server = express();
const port = process.env.PORT || 5000

server.use(express.json())

server.use(globalMiddleware)

server.post("/register", registerController);
server.post("/login", loginController);
server.post("/forgot_password", forgotPasswordController);
server.get("/prize", authMiddleware, prizeController)

// Catch-all route
server.all(/^.*$/, undefinedRouteHandler);

// error controller
server.use(errorController)

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
