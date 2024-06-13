import PropTypes from "prop-types";
import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const month = date.toLocaleString("fa-IR", { month: "long" });
  const day = date.toLocaleString("fa-IR", { day: "2-digit" });
  const year = date.toLocaleString("fa-IR", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
ExpenseDate.propTypes = {
  date: PropTypes.any,
};
export default ExpenseDate;
