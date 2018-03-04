import actions from '../actionTypes'
import { unsafeGUID, removeAtIndex } from '../../../helpers'
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
        default:
            return state
    }
}