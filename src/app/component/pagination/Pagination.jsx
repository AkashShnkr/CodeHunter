import React from 'react'
import styles from "./Pagination.module.css"

export default function Pagination() {
  return (
    <div className={styles.container}>
     <button className={styles.button}>Previuous</button>
     <button className={styles.button}>Next</button>
    </div>
  )
}
