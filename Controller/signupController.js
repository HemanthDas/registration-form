function signup(req, res) {
  if (!req.body) return res.status(400).send("No body found");
  if (!req.body.username) return res.status(400).send("No username found");
  if (!req.body.password) return res.status(400).send("No password found");
  if (!req.body.email) return res.status(400).send("No email found");
  return res.status(200).send("Signup successful");
}
module.exports = { signup };
