const express = require("express");
const router = express.Router();
const bcrpyt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { admin, auth } = require("../../middleware/permissions");

const secret = config.get("jwtSecret");

const Users = require("../../models/Users");

//private access for admin only
router.get("/", [auth, admin], (req, res) => {
  Users.find()
    .populate("role")
    .then((data) => res.json(data));
});

//REGISTRATION
//private access for admin only
router.post("/", [auth, admin], (req, res) => {
  const { role, email, name, password } = req.body;

  //validations
  if (!email || !name || !password)
    return res.status(404).json({ msg: "Please enter all fields" });

  //check if email exists
  Users.findOne({ email }).then((user) => {
    if (user) return res.status(404).json({ msg: "User already exists" });

    //create user
    const newUser = new Users({ role, email, name, password });

    //create salt & hash
    bcrpyt.genSalt(12, (err, salt) => {
      bcrpyt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
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
                  role: user.role,
                },
              });
            }
          );
        });
      });
    });
  });
});

//private access for admin only
router.delete("/:id", [auth, admin], (req, res) => {
  Users.findById(req.params.id)
    .then((user) =>
      user.remove().then(() => res.status(200).json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

//private access for admin only
router.put("/:id", [auth, admin], (req, res) => {
  const id = { _id: req.params.id };
  Users.findOneAndUpdate(id, req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
