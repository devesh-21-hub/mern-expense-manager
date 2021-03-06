//models/Expense.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const expenseSchema = new Schema({
  description: String,
  amount: Number,
  month: String,
  year: Number,
});
module.exports = mongoose.model("Expense", expenseSchema);
