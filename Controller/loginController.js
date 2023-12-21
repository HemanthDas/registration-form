function login(req, res) {
  const { email, password } = req.body;
  if (!email) {
    res.status(400).send("No email found");
  } else if (!password) {
    res.status(400).send("No password found");
  } else {
    res.status(200).send("Login successful");
  }
}
module.exports = { login };
