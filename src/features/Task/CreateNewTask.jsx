import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PaperEnhanced from '../shared/PaperEnhanced'
import TextField from 'material-ui/TextField'
import actions from '../store/actions'

class CreateNewTask extends Component {
    state = { inputValue: '' }

    onKeyDown = (e) => {
        const { keyCode, target: { value } } = e

        if (keyCode === 13 && value !== null && value !== undefined && value !== '') {
            const { addTask } = this.props

            addTask(value)

            this.setState({ inputValue: '' })
        }
    }

    onChange = (e, value) => {
        this.setState({ inputValue: value })
    }

    render() {
        return (
            <PaperEnhanced className="task-container" style={{ backgroundColor: '#eeeeee' }}>
                <TextField
                    hintText="Task name"
                    style={{ width: '100%', backgroundColor: '#eeeeee' }}
                    underlineStyle={{ borderColor: 'transparent' }}
                    underlineFocusStyle={{ borderColor: 'transparent' }}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    value={this.state.inputValue}
                />
            </PaperEnhanced>
        )
    }
}

export default connect(undefined, (dispatch, { sectionId }) => bindActionCreators({
    addTask: name => actions.addTask(name, sectionId),
}, dispatch))(CreateNewTask)
