import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setActiveFilter } from '../../actions/actions'

import styles from './Tabs.module.scss'

const Tabs = ({ activeFilter, setFilter }) => {
  const tabsArr = ['дешевый', 'быстрый', 'оптимальный']

  const filterMap = {
    cheapest: 'дешевый',
    fastest: 'быстрый',
    optimal: 'оптимальный',
  }

  const tabs = tabsArr.map((el) => {
    const classNames = [styles.tab]

    if (el === filterMap[activeFilter]) {
      classNames.push(styles.active)
    }

    const id = Object.entries(filterMap).find((filter) => filter[1] === el)?.[0]

    return (
      <li className={classNames.join(' ')} key={id}>
        <button type="button" className={styles['tab-button']} onClick={() => setFilter(id)}>
          Самый {el}
        </button>
      </li>
    )
  })

  return (
    <section className={styles.tabs}>
      <ul className={styles['tab-list']}>{tabs}</ul>
    </section>
  )
}
const mapStateToDispatch = (state) => ({
  activeFilter: state.activeTicketsFilter,
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: (value) => dispatch(setActiveFilter(value)),
})
export default connect(mapStateToDispatch, mapDispatchToProps)(Tabs)

Tabs.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
}
