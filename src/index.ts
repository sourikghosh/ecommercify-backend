import * as Sentry from "@sentry/node";
import app from "api/app";



let PORT = String(4000);
if (process.env.PORT) {
  PORT = process.env.PORT;
}

app.use(Sentry.Handlers.errorHandler());
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
