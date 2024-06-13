import "./Card.css";
import PropTypes from "prop-types";
function Card({ className, children }) {
  const classes = "card " + className
  return <div className={classes}>{ children}</div>
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
export default Card;
