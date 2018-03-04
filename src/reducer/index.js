import { combineReducers } from 'redux'
import boardReducer, { REDUCER_NAME as BOARD_REDUCER_NAME } from '../features/store/reducer/board'

const mainReducer = combineReducers({
    [BOARD_REDUCER_NAME]: boardReducer,
})

export default mainReducer
