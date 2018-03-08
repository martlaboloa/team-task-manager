import React from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import ImageLens from 'material-ui/svg-icons/image/lens'
import { Tabs, Tab } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Board from './Board'

class TeamTaskManager extends React.PureComponent {
    render() {
        return (
            <div className="ttm-container">
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                    <TextField
                        hintText="Search"
                    />
                </AppBar>

                <Tabs>
                    <Tab label="TASKS" >
                        <div className="content-container">
                            <div className="board-wrapper">
                                board here
                            </div>
                        </div>
                    </Tab>
                    <Tab label="ACTIVITY" >
                        activity1
                        activity2
                        activity3
                    </Tab>
                </Tabs>

                <Drawer open={true} containerClassName="drawer-container" className="drawer" >
                    aaaa
                </Drawer>
            </div>
        )
    }
}

export default TeamTaskManager

