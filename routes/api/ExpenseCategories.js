const express = require("express");
const router = express.Router();
const { auth, admin } = require("../../middleware/permissions");

const ExpenseCategories = require("../../models/ExpenseCategories");

//private access for admin only
router.get("/", [auth, admin], (req, res) => {
  ExpenseCategories.find().then((data) => res.status(200).json(data));
});

//private access for admin only
router.post("/", [auth, admin], (req, res) => {
  ExpenseCategories.create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ success: false }));
});

//private access for admin only
router.delete("/:id", [auth, admin], (req, res) => {
  ExpenseCategories.findById(req.params.id)
    .then((cat) =>
      cat.remove().then((data) => res.status(200).json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

//private access for admin only
router.put("/:id", [auth, admin], (req, res) => {
  const id = { _id: req.params.id };
  ExpenseCategories.findOneAndUpdate(id, req.body)
    .then((data) => res.status(200).json(req.body))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
