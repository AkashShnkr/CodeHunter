import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Menu.module.css"
export default function Menu() {
  return (
    <div className={styles.contianer}>
      <h2 className={styles.subtittle}>{"what's hot"}</h2>
      <h1> Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
  <div classsName={styles.imageContainer}>
          <Image src="/p.jpeg"
          alt=""
          fill className={styles.image}
          />
           </div>
           <div className={styles.trxtContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ut?</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John doe</span>
              <span className={styles.date}>-11/11/2004</span>
            </div>
           </div>
        </Link>
      </div>
      
    </div>
  )
}
