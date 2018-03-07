import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';
import Paper from 'material-ui/Paper'
import Drawer from 'material-ui/Drawer'
import Board from './Board'
import './styles.css'

class TeamTaskManager extends React.PureComponent {
    render() {
        return (
            <div className="ttm-container">
                <div className="header" />

                <div className="content-container">
                    <Drawer open={true} containerClassName="drawer-container" className="drawer" >
                        aaaa
                    </Drawer>

                    <Paper className="board-wrapper" zDepth={2}>
                        <Board />
                    </Paper>
                </div>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(TeamTaskManager)

