const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = Schema({
  amount: {
    type: Number,
    required: true,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  expense_categories: {
    type: Schema.Types.ObjectId,
    ref: "expense_categories",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = expense = mongoose.model("expense", expenseSchema);
