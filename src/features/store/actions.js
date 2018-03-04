import createAction from '../../reducer/actionHelpers'
import actions from './actionTypes'

export default {
    addSection: name => createAction(actions.board.ADD_SECTION, { name }),

    deleteSection: id => createAction(actions.board.DELETE_SECTION, { id }),

    renameSection: (id, name) => createAction(actions.board.RENAME_SECTION, { id, name }),


    addTask: (name, sectionId) => createAction(actions.section.ADD_TASK, { name }, { sectionId }),

    deleteTask: (id, sectionId) => createAction(actions.section.DELETE_TASK, { id }, { sectionId }),
}

