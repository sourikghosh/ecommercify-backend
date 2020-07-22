import express from "express";
import "../db/mongoose";
import routes from "./routes/index";
const app: express.Express = express();
app.use("/api", routes);
export { app as default };
