const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "roles",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = users = mongoose.model("users", usersSchema);
