import React from 'react'

import Ticket from '../Ticket'

import styles from './Tickets.module.scss'

const Tickets = () => {
  const dataTickets = [1, 2, 3, 4, 5]
  const renderTickets = dataTickets.map((ticket) => (
    <li className={styles['tickets-item']} key={ticket}>
      <Ticket />
    </li>
  ))
  return <ul className={styles['tickets-list']}>{renderTickets}</ul>
}

export default Tickets
// <li className={styles['tickets-item']} key={(maxId += 1)}>
//   <Ticket />
// </li>
// <li className={styles['tickets-item']} key={(maxId += 1)}>
//   <Ticket />
// </li>
// <li className={styles['tickets-item']} key={(maxId += 1)}>
//   <Ticket />
// </li>

// <li className={styles['tickets-item']} key={(maxId += 1)}>
//   <Ticket />
// </li>

// <li className={styles['tickets-item']} key={(maxId += 1)}>
//   <Ticket />
// </li>
