"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";


const Page = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <input type="text" placeholder="tittle" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className={styles.add}>
                <button className={styles.addbutton}>
                <Image src="/image.png" alt="" width={16} height={16} />
                </button>
                <button className={styles.addbutton}>
                <Image src="/external.png" alt="" width={16} height={16} />
                </button>
                <button className={styles.addbuttonbutton}>
                <Image src="/video.png" alt="" width={16} height={16} />
                </button>
            </div>
          )}
      
      </div>
    </div>
  );
};

export default Page;
