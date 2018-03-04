import createAction from '../../reducer/actionHelpers'
import actions from './actionTypes'


export const addSection = name => createAction(actions.board.ADD_SECTION, { name })

export const deleteSection = id => createAction(actions.board.DELETE_SECTION, { id })

export const renameSection = (id, name) => createAction(actions.board.RENAME_SECTION, { id, name })


export const addTask = (name, sectionId) => createAction(actions.section.ADD_TASK, { name }, { sectionId })

export const deleteTask = (id, sectionId) => createAction(actions.section.DELETE_TASK, { id }, { sectionId })

