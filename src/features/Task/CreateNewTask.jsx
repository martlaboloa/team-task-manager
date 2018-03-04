import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PaperEnhanced from '../shared/PaperEnhanced'
import TextField from 'material-ui/TextField'
import actions from '../store/actions'

class CreateNewTask extends Component {
    onKeyDown = (e) => {
        const { keyCode, target: { value } } = e

        if (keyCode === 13 && value !== null && value !== undefined && value !== '') {
            const { addTask } = this.props
            const { target } = e

            addTask(value)

            target.value = ''
        }
    }

    render() {
        return (
            <PaperEnhanced className="task-container">
                <TextField
                    hintText="Task name"
                    style={{ width: '100%' }}
                    underlineStyle={{ borderColor: 'transparent' }}
                    underlineFocusStyle={{ borderColor: 'transparent' }}
                    onKeyDown={this.onKeyDown}
                />
            </PaperEnhanced>
        )
    }
}

export default connect(undefined, (dispatch, { sectionId }) => bindActionCreators({
    addTask: name => actions.addTask(name, sectionId),
}, dispatch))(CreateNewTask)
