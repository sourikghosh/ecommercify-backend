import express from "express";
import * as Sentry from "@sentry/node";
import * as Apm from "@sentry/apm";
import { RewriteFrames } from "@sentry/integrations";
import "../db/mongoose";
import routes from "./routes/index";
const app: express.Express = express();

declare global {
  namespace NodeJS {
    interface Global {
      __rootdir__: string;
    }
  }
}

global.__rootdir__ = __dirname || process.cwd();
Sentry.init({
  dsn:
    "https://e6b40222e0bd4913ad18acd8a167c120@o424596.ingest.sentry.io/5356579",
  integrations: [
    new RewriteFrames({
      root: global.__rootdir__,
    }),
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Apm.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});
const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});
Sentry.configureScope(scope => {
    scope.setSpan(transaction);
  });

  
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
app.use(express.json());
app.use("/api", routes);
app.get("/",(req:express.Request,res:express.Response)=>{
    res.send(`<h1>Hello Welcome here`)
})
export { app as default };
