import express from 'express';
import { globalMiddleware, localMiddleware } from './middleware.mjs';
import { createFiles } from './controller.mjs';
import { errorController, undefinedRouteHandler } from './error.mjs';
const server = express();
const port = 5000

server.use(express.json())

server.use(globalMiddleware)

server.post("/files", localMiddleware, createFiles);
server.get("/files", localMiddleware, createFiles);

// Catch-all route
server.all(/^.*$/, undefinedRouteHandler);

// error controller
server.use(errorController)

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
