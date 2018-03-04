import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';
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

export default DragDropContext(HTML5Backend)(TeamTaskManager)

