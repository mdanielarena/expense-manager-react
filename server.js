const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
app.use(express.json());
const db = config.get("mongoURI");

//Routes
app.use("/api/users", require("./routes/api/Users"));
app.use("/api/roles", require("./routes/api/Roles"));
app.use("/api/auth", require("./routes/api/Auth"));
app.use("/api/expense_categories", require("./routes/api/ExpenseCategories"));
app.use("/api/expense", require("./routes/api/Expense"));

mongoose
  .connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`connected to mongo DB`));

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`server started on port ${port}`));
