const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/users.routes");
const { authRouter } = require("./routes/auth.routes");
const { hotelsRouter } = require("./routes/hotels.routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
app.use(cookieParser())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is my home page");
});
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/hotel", hotelsRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("server connected to the db");
  } catch (err) {
    console.log(err);
  }
  console.log("SERVER STARTED!!!!");
});
