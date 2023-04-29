import React from "react";
import styles from "../css/gifts.module.css";
const Gifts = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>Gifts and Cash Gifts</h1>
      <p className={styles.message}>
        Like most couples who have known each other for a while, we’re
        surrounded by all the household treasures anyone could ever want or
        need. No gifts are ever required, but if you wish to give, you’ll find
        our details below.
      </p>

      <article>
        <h2 className={styles.articleTitle}>Cash Gifts</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Please send all cash gifts to:
            <ul className={styles.innerList}>
              <li>Folake Olawunmi Oke</li>
              <li>Account: 3019641561</li>
              <li> Polaris bank</li>
            </ul>
          </li>
          <li className={styles.listItem}>
            For US and UK cash gifts <br/>Paypal account info:
            <ul className={styles.innerList}>
              <li>Folake Oke</li>
              <li>Email: fola.o.oke@gmail.com</li>
            </ul>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Gifts;
