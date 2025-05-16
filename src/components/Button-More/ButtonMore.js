import React from 'react'

import styles from './ButtonMore.module.scss'

const ButtonMore = () => (
  <button type="button" className={styles['button-more']} onClick={() => alert('Пока не работает')}>
    Показать еще 5 билетов
  </button>
)
export default ButtonMore
