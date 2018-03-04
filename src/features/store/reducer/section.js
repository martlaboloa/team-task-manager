import actions from '../actionTypes'
import { unsafeGUID, removeAtIndex } from '../../../helpers'

const initial = {
    tasks: {},
    taskOrder: [],
}

export default function(state = initial, action) {
    const { type, payload }  = action

    switch (type) {
        case actions.section.ADD_TASK:{
            const { tasks, taskOrder } = state
            const { name } = payload

            const newId = unsafeGUID()
            const newIndex = taskOrder.length

            return {
                tasks: {
                    ...tasks,
                    [newId]: {
                        id: newId,
                        index: newIndex,
                        name,
                    },
                },
                taskOrder: [...taskOrder, newId],
            }
        }
        case actions.section.DELETE_TASK: {
            const { tasks, taskOrder } = state
            const { id } = payload

            const { index } = tasks[id]

            const tasksAfterIndex = taskOrder.slice(index + 1)

            return {
                tasks: {
                    ...tasks,
                    [id]: undefined,
                    ...tasksAfterIndex.reduce((acc, curr) => {
                        const currTask = tasks[curr]

                        return {
                            ...acc,
                            [curr]: {
                                ...currTask,

                                index: currTask.index - 1,
                            }
                        }
                    }, {})
                },
                taskOrder: removeAtIndex(taskOrder, index),
            }
        }
        default:
            return state
    }
}