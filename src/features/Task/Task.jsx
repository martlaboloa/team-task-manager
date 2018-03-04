import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import PaperEnhanced from '../shared/PaperEnhanced'
import { getTaskName } from '../store/selectors'

class Task extends Component {
    render() {
        const { name } = this.props

        return (
            <PaperEnhanced className="task-container">
                <IconButton >
                    <ActionDone />
                </IconButton>

                <FlatButton hoverColor="transparent" rippleColor="transparent">
                    {name}
                </FlatButton>
            </PaperEnhanced>
        )
    }
}

export default connect((state, { id, sectionId }) => ({
    name: getTaskName(state, id, sectionId)
}))(Task)
