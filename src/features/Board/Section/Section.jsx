import React, { Component } from 'react'
import flowRight from 'lodash/flowRight'
import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'
import actions from '../store/actions'
import { List } from 'material-ui/List'
import Task, { CreateNewTask } from '../Task'
import SectionHeader from './SectionHeader'
import { getTaskOrder, getSectionIndex } from '../store/selectors'
import { DnDItemTypes } from '../constants'

const sectionSource = {
    beginDrag(props) {
        return { id: props.id }
    }
}

function sourceCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

const sectionTarget = {
    hover(props, monitor) {
        const { moveSection, id, index } = props


        const item = monitor.getItem()

        if (id !== item.id) {
            moveSection(item.id, index)
        }
    }
}

function targetCollect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

const Tasks = ({ taskOrder, sectionId }) => taskOrder.map(id => <Task key={id} id={id} sectionId={sectionId} />)

class Section extends Component {
    render() {
        const { id, taskOrder, connectDragSource, isDragging, connectDropTarget } = this.props

        return (
            connectDragSource(
                connectDropTarget(
                    <div
                        className="section-container"
                        style={{ opacity: isDragging ? 0 : 1 }}
                    >
                        <SectionHeader sectionId={id} />

                        <List className="section-list">

                            <Tasks taskOrder={taskOrder} sectionId={id}/>

                            <CreateNewTask sectionId={id} />
                        </List>
                    </div>
                )
            )
        )
    }
}

export default flowRight(
    connect(
        (state, { id }) => ({
            taskOrder: getTaskOrder(state, id),
            index: getSectionIndex(state, id),
        }),
        { moveSection: actions.moveSection }
    ),
    DragSource(DnDItemTypes.SECTION, sectionSource, sourceCollect),
    DropTarget(DnDItemTypes.SECTION, sectionTarget, targetCollect)
)(Section)
