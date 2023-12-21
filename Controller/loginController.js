function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Please provide email and password");
  } else {
    res.status(200).send("Login successful");
  }
}
module.exports = { login };
