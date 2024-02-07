import React from 'react'
import styles from "./Cardlist.module.css"
import Pagination from '../pagination/Pagination'
export default function Cardlist() {
  return (
    <div className={styles.contianer}>
        Cardlist
        <Pagination/>
      
    </div>
  )
}
