import React from 'react';
import Image from 'next/image';
import styles from "./Featured.module.css"
export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, I am a dev here! </b>
        Discover my Stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/p1.jpeg" alt="" fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur nemo consectetur harum fuga maiores animi!</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam provident in hic. Neque saepe nemo, aliquam excepturi eum alias magnam repellat commodi corporis vero qui dicta vitae quos eos sequi libero perspiciatis rerum eius.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      
    </div>
  )
}
