import React from 'react'
import styles from "./Cardlist.module.css"
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
export default function Cardlist() {
  return (
    <div className={styles.contianer}>
      <h1 className={styles.tittle}>Recents Posts</h1>
       <div className={styles.posts}></div>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
        <Pagination/>
      
    </div>
  )
}
