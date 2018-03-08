import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import reduce from 'lodash/reduce'
import { unsafeGUID, removeAtIndex, moveAtIndexArr } from '../../../../helpers'
import createAction from '../../../../store/actionHelpers'
import actions from '../actionTypes'
import sectionReducer from './section'

const initial = {
    sections: {},
    sectionOrder: [],
}

export const REDUCER_NAME = 'board'

export default function(state = initial, action) {
    const { type, payload }  = action

    switch (type) {
        case actions.board.ADD_SECTION: {
            const { sections, sectionOrder } = state
            const { name, iconColor } = payload

            const newId = unsafeGUID()
            const newIndex = sectionOrder.length

            return {
                sections: {
                    ...sections,
                    [newId]: {
                        id: newId,
                        index: newIndex,
                        name,
                        iconColor,
                        data: sectionReducer(undefined, action),
                    },
                },
                sectionOrder: [...sectionOrder, newId],
            }
        }
        case actions.board.DELETE_SECTION: {
            const { sections, sectionOrder } = state
            const { id } = payload

            const { index } = sections[id]

            const sectionsAfterIndex = sectionOrder.slice(index + 1)

            return {
                sections: {
                    ...sections,
                    [id]: undefined,
                    ...sectionsAfterIndex.reduce((acc, curr) => {
                        const currSec = sections[curr]

                        return {
                            ...acc,
                            [curr]: {
                                ...currSec,

                                index: currSec.index - 1,
                            }
                        }
                    }, {})
                },

                sectionOrder: removeAtIndex(sectionOrder, index),
            }
        }
        case actions.board.RENAME_SECTION: {
            const { sections } = state
            const { id, name } = payload

            const section = sections[id]

            return {
                ...state,
                sections: {
                    ...sections,
                    [id]: {
                        ...section,
                        name,
                    },
                },
            }
        }
        case actions.board.MOVE_SECTION: {
            const { sections, sectionOrder } = state
            const { id, newIndex } = payload

            const { index } = sections[id]

            const updatedSectionOrder = moveAtIndexArr(sectionOrder, index, newIndex)

            return {
                sections: newIndex !== index ? reduce(sections, (result, value, key) => {
                    return {
                        ...result,
                        [key]: {
                            ...value,
                            index: findIndex(updatedSectionOrder, secId => secId === key),
                        }
                    }
                }, {}) : sections,

                sectionOrder: updatedSectionOrder,
            }
        }
        case actions.section.ADD_TASK:
        case actions.section.DELETE_TASK: {
            const { meta: { sectionId } } = action
            const { sections } = state

            const section = sections[sectionId]

            const { data } = section

            return {
                ...state,
                sections: {
                    ...sections,
                    [sectionId]: {
                        ...section,
                        data: sectionReducer(data, action),
                    },
                },
            }
        }
        case actions.section.MOVE_TASK: { // hack, needs to be changed
            const { payload: { id, newSectionId } } = action
            const { sections } = state

            const fromSectionId = find(
                sections, sect => (find(sect.data.tasks, tsk => tsk.id === id) !== undefined)
            ).id

            const fromEqualsTo = fromSectionId === newSectionId

            if (fromEqualsTo) {
                const section = sections[fromSectionId]

                return {
                    ...state,
                    sections: {
                        ...sections,

                        [fromSectionId]: {
                            ...section,
                            data: sectionReducer(
                                section.data,
                                action,
                            ),
                        },
                    },
                }
            }

            const fromSec = sections[fromSectionId]
            const toSec = sections[newSectionId]

            return {
                ...state,
                sections: {
                    ...sections,

                    [fromSectionId]: {
                        ...fromSec,
                        data: sectionReducer(
                            fromSec.data,
                            createAction(actions.section.DELETE_TASK, { id }, { sectionId: fromSectionId }),
                        ),
                    },

                    [newSectionId]: {
                        ...toSec,
                        data: sectionReducer(
                            toSec.data,
                            action,
                            fromSec.data.tasks[id],
                        ),
                    },
                },
            }
        }
        default:
            return state
    }
}