import actions from '../actionTypes'
import {unsafeGUID, removeAtIndex, moveAtIndexArr} from '../../../helpers'
import reduce from "lodash/reduce";
import findIndex from "lodash/findIndex";

const initial = {
    tasks: {},
    taskOrder: [],
}

export default function(state = initial, action, sectId) {
    const { type, payload, meta }  = action

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
        case actions.section.MOVE_TASK: {
            const { tasks, taskOrder } = state
            const { id, newIndex } = payload
            const { sectionId } = meta
            const { index } = tasks[id]

            if (sectionId !== sectId) {
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

            const updatedTaskOrder = moveAtIndexArr(taskOrder, index, newIndex)

            return {
                tasks: newIndex !== index ? reduce(tasks, (result, value, key) => {
                    return {
                        ...result,
                        [key]: {
                            ...value,
                            index: findIndex(updatedTaskOrder, tskId => tskId === key),
                        }
                    }
                }, {}) : tasks,

                taskOrder: updatedTaskOrder,
            }
        }
        default:
            return state
    }
}