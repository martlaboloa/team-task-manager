import { combineReducers } from 'redux'
import { reducer as boardReducer } from '../features/Board'

const mainReducer = combineReducers({
    board: boardReducer,
})

export default mainReducer
