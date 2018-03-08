import { REDUCER_NAME as BOARD_REDUCER_NAME } from './reducer/board'

export const getBoard = state => state[BOARD_REDUCER_NAME]

export const getSections = state => getBoard(state).sections

export const getSectionOrder = state => getBoard(state).sectionOrder


export const getSection = (state, id) => getSections(state)[id]

export const getSectionData = (state, id) => getSection(state, id).data

export const getSectionIndex = (state, id) => getSection(state, id).index

export const getSectionName = (state, id) => getSection(state, id).name

export const getSectionIconColor = (state, id) => getSection(state, id).iconColor

export const getTasks = (state, sectionId) => getSectionData(state, sectionId).tasks

export const getTaskOrder = (state, sectionId) => getSectionData(state, sectionId).taskOrder


export const getTask = (state, id, sectionId) => getTasks(state, sectionId)[id]

export const getTaskIndex = (state, id, sectionId) => getTask(state, id, sectionId).index

export const getTaskName = (state, id, sectionId) => getTask(state, id, sectionId).name
