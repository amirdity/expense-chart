import './Chart.css'
import ChartBar from './ChartBar';
import PropTypes from 'prop-types';
function Chart({ dataPoints }) {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={null}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}
Chart.propTypes = {
  dataPoints: PropTypes.object
};
export default Chart