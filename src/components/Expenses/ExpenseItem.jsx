import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import PropTypes from "prop-types";
function ExpenseItem({ date, title, amount }) {
  
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          ${amount.toLocaleString("fa-IR")}
        </div>
      </div>
    </Card>
  );
}
ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  amount: PropTypes.number
};
export default ExpenseItem;
