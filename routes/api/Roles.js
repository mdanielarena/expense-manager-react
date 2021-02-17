const express = require("express");
const router = express.Router();
const { admin, auth } = require("../../middleware/permissions");

const Roles = require("../../models/Roles");

//private access for admin only
router.get("/", [auth, admin], (req, res) => {
  Roles.find()
    .sort({ date: -1 })
    .then((role) => res.json(role));
});

//private access for admin only
router.post("/", [auth, admin], (req, res) => {
  Roles.create(req.body)
    .then((role) => res.status(200).json(role))
    .catch((err) => res.status(404).json({ success: res.body }));
});

//private access for admin only
router.put("/:id", [auth, admin], (req, res) => {
  const id = { _id: req.params.id };

  Roles.findOneAndUpdate(id, req.body)
    .then((role) => res.status(200).json(role))
    .catch((err) => res.status(404).json({ success: false }));
});

//private access for admin only
router.delete("/:id", [auth, admin], (req, res) => {
  Roles.findById(req.params.id)
    .then((role) => role.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
