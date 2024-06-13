import { useState } from "react";
import "./ExpenseForm.css";
import PropTypes from "prop-types";
function ExpenseForm({ onSaveExpenseData }) {
  const [fromInput, setFormInput] = useState({
    textInput: "",
    amountInput: "",
    dataInput: "",
  });
  function titleChangeHandler(e) {
    setFormInput((prev) => {
      return { ...prev, textInput: e.target.value };
    });
  }
  function AmountChangeHandler(e) {
    setFormInput((prev) => {
      return { ...prev, amountInput: e.target.value };
    });
  }
  function dateChangeHandler(e) {
    setFormInput((prev) => {
      return { ...prev, dataInput: e.target.value };
    });
  }
  function submitHandler(e) {
    e.preventDefault();

    const expenseData = {
      title: fromInput.textInput,
      amount: fromInput.amountInput,
      date: new Date(fromInput.dataInput),
    };

    onSaveExpenseData(expenseData);
    setFormInput({
      textInput: "",
      amountInput: "",
      dataInput: "",
    });
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={fromInput.textInput}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={fromInput.amountInput}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            value={fromInput.dataInput}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func.isRequired,
};
export default ExpenseForm;
