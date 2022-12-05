import { Fragment } from "react";
import classes from "./Catch.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onToggle} className={classes.backdrop} />;
};

const Modal = ({ img, tryCount, catchHandler }) => {
  return (
    <div className={classes.modal}>
      남은횟수 : {tryCount}
      <img src={img} />
      <div>
        <button onClick={() => catchHandler()}>몬스터볼</button>
      </div>
    </div>
  );
};

const Catch = ({ name, img, onToggle, catchHandler, tryCount }) => {
  return (
    <Fragment>
      <Backdrop onToggle={onToggle} />
      <Modal img={img} catchHandler={catchHandler} tryCount={tryCount} />
    </Fragment>
  );
};

export default Catch;
