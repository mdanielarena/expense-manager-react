const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
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

module.exports = roles = mongoose.model("roles", rolesSchema);
