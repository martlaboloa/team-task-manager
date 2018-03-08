import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import flowRight from 'lodash/flowRight'
import { DragSource, DropTarget } from 'react-dnd'
import PaperEnhanced from '../../shared/PaperEnhanced'
import { getTaskIndex, getTaskName} from '../store/selectors'
import actions from '../store/actions'
import { DnDItemTypes } from '../constants'

const taskSource = {
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

const taskTarget = {
    hover(props, monitor) {
        const { moveTask, id, sectionId, index } = props

        const item = monitor.getItem()

        if (id !== item.id) {
            moveTask(item.id, index, sectionId)

            console.log('task hover: ', item.id, index, sectionId)
        }
    }
}

function targetCollect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

class Task extends Component {
    render() {
        const { name, connectDragSource, isDragging, connectDropTarget } = this.props

        return (
            connectDragSource(
                connectDropTarget(
                    <div>
                        <PaperEnhanced
                            className="task-container"
                            style={{ opacity: isDragging ? 0 : 1 }}
                        >
                            <IconButton >
                                <ActionDone />
                            </IconButton>

                            <FlatButton hoverColor="transparent" rippleColor="transparent">
                                {name}
                            </FlatButton>
                        </PaperEnhanced>
                    </div>
                )
            )
        )
    }
}

export default flowRight(
    connect(
        (state, { id, sectionId }) => ({
            name: getTaskName(state, id, sectionId),
            index: getTaskIndex(state, id, sectionId),
        }),
        { moveTask: actions.moveTask },
    ),
    DragSource(DnDItemTypes.TASK, taskSource, sourceCollect),
    DropTarget(DnDItemTypes.TASK, taskTarget, targetCollect)
)(Task)
