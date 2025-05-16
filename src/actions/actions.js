export const setActiveFilter = (payload) => ({
  type: 'ACTIVE_TICKET_FILTER',
  payload,
})

export const changeAllFilters = () => ({
  type: 'CHANGE_ALL_FILTERS',
})

export const changeFilter = (id) => ({
  type: 'CHANGE_FILTERS',
  id,
})
