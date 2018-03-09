import React from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import ImageLens from 'material-ui/svg-icons/image/lens'
import { Tabs, Tab } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Board from './Board'
import largeLoremIpsum from './largeLoremIpsum'

class TeamTaskManager extends React.PureComponent {
    render() {
        return (
            <div className="ttm-container">
                <AppBar
                    className="app-bar-container"
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                    <TextField
                        hintText="Search"
                    />
                </AppBar>

                <div className="content-container">
                    <Drawer containerClassName="drawer-container" open={true} >
                        ddddd
                    </Drawer>

                    <Tabs
                        className="tabs-container"
                        contentContainerClassName="tabs-content-container"

                        tabItemContainerStyle={{
                            boxShadow: '0 0 5px silver',
                            color: 'magenta',
                            position: 'fixed',
                            left: '0px',
                            paddingLeft: '256px',
                            backgroundColor: 'white',
                        }}

                        tabTemplateStyle={{ height: '100%' }}

                        inkBarStyle={{
                            color: 'brown',
                            marginTop: '46px',
                        }}
                    >
                        <Tab className="tab-container" label="TASKS" >
                            <div className="tasks-tab-container" >
                                <Board />
                            </div>
                        </Tab>
                        <Tab className="tab-container" label="LOREM IPSUM" >
                            {largeLoremIpsum}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default TeamTaskManager

