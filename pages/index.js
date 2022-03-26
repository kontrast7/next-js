import styles from "../styles/Home.module.css";
import Headind from "../components/Heading";

const Home = () => {
  return (
    <div className={styles.container}>
        <Headind tag={"h2"} text={"Home Page"} />
    </div>
  );
};

export default Home;
