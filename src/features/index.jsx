import React from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { Tabs, Tab } from 'material-ui/Tabs';
import Board from './Board'

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
                        jjj
                    </Tab>
                    <Tab label="Item Two" >
                        kkk
                    </Tab>
                    <Tab label="onActive" >
                        lll
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

export default TeamTaskManager

