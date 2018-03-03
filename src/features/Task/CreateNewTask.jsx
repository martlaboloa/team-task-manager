import React, { Component } from 'react'
import PaperEnhanced from '../shared/PaperEnhanced'
import TextField from 'material-ui/TextField'

class CreateNewTask extends Component {
    render() {
        return (
            <PaperEnhanced className="task-container">
                <TextField
                    hintText="Task name"
                    style={{ width: '100%' }}
                    underlineStyle={{ borderColor: 'transparent' }}
                    underlineFocusStyle={{ borderColor: 'transparent' }}
                />
            </PaperEnhanced>
        )
    }
}

export default CreateNewTask
