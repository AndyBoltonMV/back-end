const express = require("express");
const cors = require("cors");
const { userRouter } = require("./User");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).send({ msg: "Working" });
});

app.use("/user", userRouter);

module.exports = app;
