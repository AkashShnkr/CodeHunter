import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./navbar.module.css"
import Authlink from '../authlink/Authlink'
import Themetoggle from '../Themetoggle/Themetoggle'
export default function Navbar() {
  return (
    <div className={styles.container}>
     <div className={styles.social}>
      <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
      <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
      <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
      <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
      </div>
     <div className={styles.logo}>BlogHunter</div>
     <div className={styles.links}>
      <Themetoggle/>
      <Link href="/" className={styles.link}>Homepage</Link>
      <Link href="/" className={styles.link}>Contact</Link>
      <Link href="/" className={styles.link}>About</Link>
      <Authlink/>
     </div>
       
    </div>
)
}
