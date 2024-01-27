import Layout from "../Layout/page";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h3 className={styles.heading}>Need Help? <b>Contact Us</b></h3>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label><div className={styles.divider}></div>
              <input type="text" id="name" name="name" placeholder="Enter Name" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label><div className={styles.divider}></div>
              <input type="email" id="email" name="email" placeholder="Enter Email" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label><div className={styles.divider}></div>
              <input type="text" id="subject" name="subject" placeholder="Enter Subject" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label><div className={styles.divider}></div>
              <textarea id="message" name="message" placeholder="Enter Message" required rows="5" className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
