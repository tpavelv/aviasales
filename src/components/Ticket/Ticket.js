import React from 'react'

import styles from './Ticket.module.scss'
import logo from './S7 Logo.svg'

const Ticket = () => (
  <>
    <header className={styles.header}>
      <span className={styles.price}>13 400 Р</span>
      <img src={logo} alt="Логотип s7 airlines" className={styles.logo}></img>
    </header>
    <section className={styles['trips-info']}>
      <div className={styles.flight}>
        <div className={`${styles['column-time']} ${styles.column}`}>
          <p>MOW – HKT</p>
          <span>10:45 – 08:00</span>
        </div>
        <div className={`${styles['column-duration']} ${styles.column}`}>
          <p>В пути</p>
          <span>21ч 15м</span>
        </div>
        <div className={`${styles['column-stops']} ${styles.column}`}>
          <p>2 пересадки</p>
          <span>HKG, JNB</span>
        </div>
      </div>
      <div className={styles.flight}>
        <div className={`${styles['column-time']} ${styles.column}`}>
          <p>MOW – HKT</p>
          <span>11:20 – 00:50</span>
        </div>
        <div className={`${styles['column-duration']} ${styles.column}`}>
          <p>В пути</p>
          <span>13ч 30м</span>
        </div>
        <div className={`${styles['column-stops']} ${styles.column}`}>
          <p>1 пересадка</p>
          <span>HKG</span>
        </div>
      </div>
    </section>
  </>
)

export default Ticket
