import "./ExpensesFilter.css";
import PropTypes from "prop-types";
function ExpensesFilter({ selected, onChangeFilter }) {
  function dropdownChangeHandler(e) {
    onChangeFilter(e.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2020">1399</option>
          <option value="2021">1400</option>
          <option value="2022">1401</option>
          <option value="2023">1402</option>
          <option value="2024">1403</option>
          <option value="all">نمایش همه </option>
        </select>
      </div>
    </div>
  );
}
ExpensesFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
export default ExpensesFilter;
