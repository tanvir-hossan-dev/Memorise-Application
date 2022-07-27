require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const postRouters = require("./routers/postRouters");
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/posts", postRouters);

const port = process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB).then(() => {
  app.listen(port, () => {
    console.log(`${port} is listening`);
  });
});
