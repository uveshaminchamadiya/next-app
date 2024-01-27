import Layout from "../Layout/page";
import Image from "next/image";
import img from "../../img/hero.png";
import styles from "../../styles/Home.module.css"; 

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>Enjoy Your Healthy Delicious Food</div>
          <div className={styles.tag}>Elevate Your Taste, Elevate Your Mood.</div>
        </div>
        <div className={styles.right}>
          <Image src={img} alt="Burger" width={500} height={500} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
