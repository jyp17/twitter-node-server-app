// app.js creates and configures an HTTP server listening for inco,ing requests
import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";

const app = express();
app.use(express.json());

HelloController(app);
UserController(app);

app.listen(4000);