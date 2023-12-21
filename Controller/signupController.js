function signup(req, res) {
  if (req.body && req.body.username && req.body.password && req.body.email) {
    res.send("Signup successful");
  } else {
    res.send("Signup failed, You have not provided all the required fields");
  }
}
module.exports = { signup };
