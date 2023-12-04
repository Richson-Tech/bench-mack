import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Richson Tech. All rights reserved.</div>
      <div className={styles.socials}>
        <Image
          src="/1.png"
          height={15}
          width={15}
          className={styles.icon}
          alt="Richson Tech"
        />
        <Image
          src="/2.png"
          height={15}
          width={15}
          className={styles.icon}
          alt="Richson Tech"
        />
        <Image
          src="/3.png"
          height={15}
          width={15}
          className={styles.icon}
          alt="Richson Tech"
        />
        <Image
          src="/4.png"
          height={15}
          width={15}
          className={styles.icon}
          alt="Richson Tech"
        />
      </div>
    </div>
  );
};

export default Footer;
