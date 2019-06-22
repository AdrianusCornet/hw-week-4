const initialState = {}

const reduser = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TEST':
      console.log('werkt dit?')
      return state
    default:
      return state
  }
}

export default reduser