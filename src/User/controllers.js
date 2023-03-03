const User = require("./model");

async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    if (!user) {
      throw new Error("Failed to create");
    } else {
      res.status(200).send({ user });
    }
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
}

module.exports = {
  signUp,
};
