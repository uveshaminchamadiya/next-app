import Layout from "../Layout/page";
import styles from "../../styles/About.module.css"
import Image from "next/image";
import img from "../../img/about-1.png"

const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image className={styles.img} src={img} width={500} height={500} alt="about" />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            Welcome to ZestyBites.com, your ultimate destination for hassle-free and delightful online food ordering. We understand that the love for food knows no boundaries, and we've embarked on a journey to bring your favorite flavors right to your fingertips.
          </div>
          <div className={styles.feature}>
            <b>Convenience : </b> Say goodbye to long waits on the phone or standing in lines. ZestyBites.com lets you order your favorite meals with just a few clicks.
          </div>
          <div className={styles.feature}>
            <b>Customization : </b> Your preferences matter to us. Customize your orders to suit your taste, and we'll make sure your meal is prepared just the way you like it.
          </div>
          <div className={styles.feature}>
            <b>Quality Assurance : </b> We are dedicated to ensuring that every meal you order through ZestyBites.com meets the highest quality standards.
          </div>
          <div className={styles.bottom}>
            With ZestyBites.com, you can explore a diverse range of Variet, all from the comfort of your home or office.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
