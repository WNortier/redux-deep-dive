import { createStore } from 'react-redux'
import { cakeReducer } from './cakeReducer'

const store = createStore(cakeReducer)

export default store
