import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionDone from 'material-ui/svg-icons/action/done'


class PaperEnhanced extends Component {
    state = { hover: false }

    onMouseOver = (...args) => {
        const { onMouseOver } = this.props

        this.setState({ hover: true})

        if (onMouseOver) {
            return onMouseOver(...args)
        }
    }

    onMouseOut = (...args) => {
        const { onMouseOut } = this.props

        this.setState({ hover: false})

        if (onMouseOut) {
            return onMouseOut(...args)
        }
    }

    getZDepth = () => {
        const { hover } = this.state

        return hover ? 3 : 1
    }


    render() {
        const { onMouseOver, onMouseOut, children, ...restProps } = this.props

        return (
            <Paper
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                zDepth={this.getZDepth()}
                {...restProps}
            >
                {children}
            </Paper>
        )
    }
}

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
