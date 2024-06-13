import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import PropTypes from "prop-types";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // selectedYear === e.target.value
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  
  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
Expenses.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      amount: PropTypes.number,
      date: PropTypes.instanceOf(Date),
    })
  ).isRequired,
};
export default Expenses;
