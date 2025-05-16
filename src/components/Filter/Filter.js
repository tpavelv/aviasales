import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeAllFilters, changeFilter } from '../../actions/actions'

import styles from './Filter.module.scss'

const Filter = ({ checkStatus, checkStatusAll, onChangeAllFilters, onChangeFilter }) => {
  const mapStops = {
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  }

  const stopsCheckboxes = Object.entries(mapStops).map(([id, label]) => (
    <label className={styles.check} key={id}>
      <input
        type="checkbox"
        name="sold"
        className={styles['check-input']}
        checked={checkStatus[id]}
        onChange={() => onChangeFilter(id)}
      />
      <span className={styles['check-box']}></span>
      {label}
    </label>
  ))
  return (
    <article className={styles.filters}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <fieldset className={styles['check-group']}>
        <label className={styles.check}>
          <input
            type="checkbox"
            name="sold"
            className={styles['check-input']}
            checked={checkStatusAll}
            onChange={onChangeAllFilters}
          />
          <span className={styles['check-box']}></span>
          Все
        </label>
        {stopsCheckboxes}
      </fieldset>
    </article>
  )
}

const mapStateToProps = (state) => ({
  checkStatus: state.stops.option,
  checkStatusAll: state.stops.all,
})

const mapDispatchToProps = (dispatch) => ({
  onChangeAllFilters: () => dispatch(changeAllFilters()),
  onChangeFilter: (id) => dispatch(changeFilter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.propTypes = {
  checkStatus: PropTypes.object.isRequired,
  checkStatusAll: PropTypes.bool.isRequired,
  onChangeAllFilters: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}
