import classes from "./Wrapper.module.css";

function Wrapper(props) {
  return <div className={classes.wrapper}>{props.children}</div>;
}

export default Wrapper;
