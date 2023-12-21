const express = require("express");
const app = express();
const port = 3000;
const { signup } = require("./Controller/signupController");
app.listen(port, () => console.log(`Server running on port ${port}`));
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/auth/signup", signup);
