"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./Authlink.module.css";
export default function Authlink() {
const [open,setOpen] = useState(false)
  const  status="unautheanticated";
  return (
    <>
      {status==="unautheanticated"?
      (
      
      <Link href="/" className={styles.link}>Login</Link>
      ):(
      <>
      <Link href="/"  className={styles.link}>write</Link>
      <span className={styles.link}>Logout</span>
      </>)}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
     {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {status==="unautheanticated"?
      (
      
      <Link href="/">Login</Link>
      ):(
      <>
      <Link href="/">write</Link>
      <span className={styles.link}>Logout</span>
      </>)}
      </div>
    )}
    </>
  )
}
