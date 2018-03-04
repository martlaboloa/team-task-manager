import actions from './actionTypes'
import { unsafeGUID, removeAtIndex } from '../../helpers'

const initial = {
    tasks: {},
    taskOrder: [],
}

export default function(state = initial, action) {
    const { type, payload }  = actions

    switch (type) {
        case actions.board.ADD_SECTION: {
            const { sections, sectionOrder } = state
            const { name } = payload

            const newId = unsafeGUID()
            const newIndex = sectionOrder.length

            return {
                sections: {
                    ...sections,
                    [newId]: {
                        id: newId,
                        index: newIndex,
                        name,
                        data: section(undefined, action),
                    },
                },
                sectionOrder: [...sectionOrder, newId],
            }
        }
        case actions.board.DELETE_SECTION: {
            const { sections, sectionOrder } = state
            const { id } = payload

            const { index } = sections[id]

            return {
                sections: {
                    ...sections,
                    [id]: undefined,
                },
                sectionOrder: removeAtIndex(sectionOrder, index),
            }
        }
        default:
            return state
    }
}