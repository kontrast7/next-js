import styles from "../styles/Home.module.css";
import Headind from "../components/Heading";
import Head from "next/head";
import Socials from "./../components/Socials";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/socials`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { socials: data },
  };
};

const Home = ({ socials }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Headind tag={"h2"} text={"Home Page"} />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
