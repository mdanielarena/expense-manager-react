const express = require("express");
const router = express.Router();

const { auth, user } = require("../../middleware/permissions");
const Expense = require("../../models/Expense");

//private access for authenticated only
router.get("/", [auth, user], (req, res) => {
  Expense.find()
    .populate("users expense_categories")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ success: false }));
});

//private access for authenticated only
router.post("/", [auth, user], (req, res) => {
  Expense.create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ success: false }));
});

//private access for authenticated only
router.delete("/:id", [auth, user], (req, res) => {
  Expense.findById(req.params.id)
    .then((expense) =>
      expense.remove().then((data) => res.status(200).json({ success: true }))
    )
    .catch((err) => res.status(404).json({ succes: false }));
});

//private access for authenticated only
router.put("/:id", [auth, user], (req, res) => {
  const id = { _id: req.params.id };
  Expense.findOneAndUpdate(id, req.body)
    .then((data) => res.status(200).json(req.body))
    .catch((err) => res.status(400).json({ success: false }));
});

module.exports = router;
