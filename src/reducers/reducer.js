const initialState = {
  activeTicketsFilter: 'cheapest',
  stops: {
    all: false,
    option: {
      0: false,
      1: false,
      2: false,
      3: false,
    },
  },
}

const reducer = (stateInput, action) => {
  const state = stateInput ?? initialState
  const { stops } = state
  switch (action.type) {
    case 'ACTIVE_TICKET_FILTER':
      return { ...state, activeTicketsFilter: action.payload }

    case 'CHANGE_ALL_FILTERS': {
      const newAll = !state.stops.all
      const newOption = { ...stops.option }

      Object.keys(newOption).forEach((key) => {
        newOption[key] = newAll
      })
      // for (const key in newOption) {
      //   newOption[key] = newAll
      // }

      return { ...state, stops: { all: newAll, option: newOption } }
    }
    case 'CHANGE_FILTERS': {
      const updatedOptions = {
        ...stops.option,
        [action.id]: !stops.option[action.id],
      }

      const isAllSelected = Object.values(updatedOptions).every(Boolean)

      return {
        ...state,
        stops: {
          all: isAllSelected,
          option: updatedOptions,
        },
      }
    }

    default:
      return state
  }
}

export default reducer
