import "./ChartBar.css"
import PropTypes from "prop-types";
function ChartBar({lable}) {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{lable}</div>
    </div>
  );
}
ChartBar.propTypes = {
  lable: PropTypes.string
}
export default ChartBar