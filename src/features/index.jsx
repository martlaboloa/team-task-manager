import React from 'react'
import Paper from 'material-ui/Paper'
import Board from './Board'
import './styles.css'

class TeamTaskManager extends React.PureComponent {
    render() {
        return (
            <Paper className="board-wrapper" zDepth={2}>
                <Board />
            </Paper>
        )
    }
}

export default TeamTaskManager

