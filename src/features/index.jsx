import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import Board from './Board'
import './styles.css'

class TeamTaskManager extends React.PureComponent {
    render() {
        return (
            <div className="ttm-container">
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                <Tabs>
                    <Tab label="Item One" >
                        aaa
                    </Tab>
                    <Tab label="Item Two" >
                        bbb
                    </Tab>
                    <Tab label="onActive" >
                        ccc
                    </Tab>
                </Tabs>

                <Drawer open={true} containerClassName="drawer-container" className="drawer" >
                    aaaa
                </Drawer>

                <div className="content-container">

                    <div className="board-wrapper" zDepth={2}>

                    </div>
                </div>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(TeamTaskManager)

