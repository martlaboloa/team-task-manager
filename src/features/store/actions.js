import createAction from '../../reducer/actionHelpers'
import actions from './actionTypes'


export const bla = id => createAction(actions.SET_PRODUCT_ID, id)

