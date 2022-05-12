loimport express from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send({ test: "hello" });
});

mongoose
  .connect(
    "mongodb://localhost:27017/testDB",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("connect mongodb");
  });

app.use("/api", router);

app.listen(3001, () => {
  console.log("running on port 3000");
});
