const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = expense_categories = mongoose.model(
  "expense_categories",
  expenseSchema
);
