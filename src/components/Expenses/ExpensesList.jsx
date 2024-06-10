import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList({ items }) {
  let expensesContent = (
    <p className="expenses-list__fallback">NOT EXPENSES FOUND.</p>
  );
  if (items.length > 0) {
    expensesContent = items.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
}
ExpensesList.propTypes = {
  items: PropTypes.array,
};
export default ExpensesList;
