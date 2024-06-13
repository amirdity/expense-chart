import "./Chart.css";
import ChartBar from "./ChartBar";
import PropTypes from "prop-types";
function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart" key={Math.random()}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          // key={dataPoint.lable}
          key={Math.random()}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}
Chart.propTypes = {
  dataPoints: PropTypes.array,
};
export default Chart;
