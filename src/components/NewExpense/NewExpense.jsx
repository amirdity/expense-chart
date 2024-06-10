import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import PropTypes from "prop-types";
function NewExpense({ onAddExpense }) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
NewExpense.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};
export default NewExpense;
