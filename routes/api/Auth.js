const express = require("express");
const router = express.Router();
const bcrpyt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { admin, auth } = require("../../middleware/permissions");

const secret = config.get("jwtSecret");
const Users = require("../../models/Users"); 

//access only when loggedin
router.get("/", auth, (req, res) => {
  Users.findById(req.user.id)
    .select("-password")
    .populate("role")
    .then((user) => res.json(user));
});

//LOGIN
router.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(404).json({ msg: "please enter all fields" });

  //check for existing user else msg user does not exists
  Users.findOne({ email })
    .populate("role")
    .then((user) => {
      if (!user) return res.status(404).json({ msg: "User does not exists!" });

      //validate password if not then messagge invalid credentials
      bcrpyt.compare(password, user.password).then((isMatch) => {
        if (!isMatch)
          return res.status(404).json({ msg: "Invalid Credentials" });
        jwt.sign(
          { id: user.id, role: user.role.name },
          secret,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role.name,
                description: user.role.description,
              },
            });
          }
        );
      });
    });
});

module.exports = router;
