import React, { Component } from 'react'
import PaperEnhanced from '../shared/PaperEnhanced'
import TextField from 'material-ui/TextField'

class CreateNewTask extends Component {
    render() {
        return (
            <PaperEnhanced className="task-container">
                <TextField
                    hintText="Hint Text"
                    style={{
                        width: '150px',
                    }}
                />
            </PaperEnhanced>
        )
    }
}

export default CreateNewTask
