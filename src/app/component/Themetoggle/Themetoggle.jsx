"use client"

import React, { useContext } from 'react'
import Image from 'next/image';
import styles from "./Themetoggle.module.css";
import { ThemeContext } from '@/context/ThemeContext';

  const ThemeToggle =() =>{
    const {toggle,theme} = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}>
       
       <Image src="/moon.png" alt="night" width={14} height={14}/>
       <div className={styles.ball}></div>
       <Image src="/sun.png" alt="day"    width={14} height={14}  />
    </div>
  
  )};
export default ThemeToggle;
