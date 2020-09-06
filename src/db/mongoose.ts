import { connect, connection } from "mongoose";
import config from "util/config";
connection.on("reconnected", () => {
  console.log("Mongoose Connection Reestablished");
});
connection.on("close", () => {
  console.log("Mongoose Connection Closed");
});

connect(`${config.MONGO_CONNECTION_URI}/${config.DATABASE}`, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
})
  .then(() => {
    console.log("connected");
  })
  .catch((e) => console.log("error in connecting mongoose", e));
