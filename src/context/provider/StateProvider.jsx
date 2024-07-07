import { useReducer } from 'react'
import AppContext from '../store'
import reducer, { initialState } from '../reducer/Reducer'

const StateProvider = ({ children }) => {
  return (
    <div>
      <AppContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </AppContext.Provider>
    </div>
  )
}

export default StateProvider
