function signup(req, res) {
  if (req.body.username && req.body.password && req.body.email  ) {
    res.send("Signup successful");
  } else {
    res.send("Signup failed");
  }
}
module.exports = { signup };
