const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const { signup } = require("./Controller/signupController");
const { login } = require("./Controller/loginController");

app.listen(process.env.PORT_NUMBER, () =>
  console.log(`Server running on port ${process.env.PORT_NUMBER}`)
);
app.get("/", (req, res) => {
  const userIP = req.ip;
  res.send(`Your IP address is ${userIP}`);
});
app.post("/auth/signup", signup);
app.post("/auth/login");
