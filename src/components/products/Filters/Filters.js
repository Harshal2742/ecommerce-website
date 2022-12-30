import styles from "./Filters.module.css";
import Sizes from "./Sizes";

const Filters = () => {
  return (
    <div className={styles.filter}>
      <h3>Filters</h3>
      <Sizes />  
    </div>
  );
};

export default Filters;
