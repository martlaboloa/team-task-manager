import { combineReducers } from 'redux'
import boardReducer, { REDUCER_NAME as BOARD_REDUCER_NAME } from '../../features/Board/store/reducer/board'

const mainReducer = combineReducers({
    [BOARD_REDUCER_NAME]: boardReducer,
})

export default mainReducer
