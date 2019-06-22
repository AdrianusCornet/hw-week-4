const initialState = []

const reduser = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_MODEL':
      return state.concat(action.payload)
    default:
      return state
  }
}

export default reduser