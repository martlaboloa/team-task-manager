import { combineReducers } from 'redux'
import reducer from '../features/store/reducer'

const mainReducer = combineReducers({
    board: reducer,
})

export default mainReducer
