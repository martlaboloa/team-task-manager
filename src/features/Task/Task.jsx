import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import PaperEnhanced from '../shared/PaperEnhanced'

class Task extends Component {
    render() {
        return (
            <PaperEnhanced className="task-container">
                <IconButton >
                    <ActionDone className="complete-button" />
                </IconButton>

                <FlatButton className="dialog-button" hoverColor="transparent" rippleColor="transparent">
                    Brendan Lim
                </FlatButton>
            </PaperEnhanced>
        )
    }
}

export default Task
