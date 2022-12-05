import { Fragment } from "react";
import classes from "./Catch.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onToggle} className={classes.backdrop} />;
};

const Modal = ({ img, catchHandler }) => {
  return (
    <div className={classes.modal}>
      <img src={img} />
      <div>
        <button onClick={() => catchHandler()}>몬스터볼</button>
      </div>
    </div>
  );
};

const Catch = ({ name, img, onToggle, catchHandler }) => {
  return (
    <Fragment>
      <Backdrop onToggle={onToggle} />
      <Modal img={img} catchHandler={catchHandler} />
    </Fragment>
  );
};

export default Catch;
