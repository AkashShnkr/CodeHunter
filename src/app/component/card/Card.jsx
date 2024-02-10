import styles from "./card.module.css";
import Image from "next/image";
import React from "react";

const Card = () => {
  const date=new Date();
  const day=date.getDay();
  const month=date.getMonth()+1;
  const year=date.getFullYear();
  const formatTime=`${day}/${month}/${year}`;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg"  
        alt="" fill />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{formatTime}</span>
          <span className={styles.category}>Food</span>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        atque provident molestias.
      </div>
      <div className={styles.link}>Read More</div>
    </div>
  );
};

export default Card;
