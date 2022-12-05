import classes from "./Status.module.css";

const Status = ({ img, name, stats }) => {
  return (
    <div className={classes.container}>
      <div>
        <img src={img} />
      </div>
      <div>{name}</div>
      <div>
        {stats[0].stat.name}
        {stats[0][base_stat]}
      </div>
      <div>
        {stats[1].stat.name}
        {stats[1][base_stat]}
      </div>
      <div>
        {stats[2].stat.name}
        {stats[2][base_stat]}
      </div>
      <div>
        {stats[3].stat.name}
        {stats[3][base_stat]}
      </div>
    </div>
  );
};

export default Status;
