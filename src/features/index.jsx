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
                <div className="app-bar-container">
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    >
                        <TextField
                            hintText="Search"
                        />
                    </AppBar>
                </div>

                <div className="tabs-container">
                    <Tabs>
                        <Tab label="TASKS" >
                            <div className="tasks-tab-container">
                                <div className="board-wrapper">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed dolor id nunc fermentum viverra. Morbi purus justo, rutrum eu purus vitae, faucibus iaculis nulla. Quisque cursus velit vitae dui ullamcorper, at fringilla odio maximus. Nam convallis pulvinar nisl vitae ultricies. Nulla sed luctus lectus. Vestibulum tellus est, malesuada quis purus sit amet, blandit molestie erat. Nulla eleifend dui vitae urna porttitor, ut scelerisque ipsum rutrum. Nunc maximus ultricies dolor, vel faucibus nunc dignissim quis. Phasellus molestie viverra justo. Aenean posuere tincidunt mauris vel sollicitudin. Nunc cursus suscipit tellus ut hendrerit. Suspendisse blandit mattis nulla.

                                    Phasellus ut enim est. Curabitur sit amet lorem leo. Pellentesque rhoncus leo lectus, at tristique est convallis sed. Praesent dictum sollicitudin sem, vel feugiat augue interdum ut. Nulla cursus viverra dui id porttitor. Sed rutrum augue non aliquet elementum. Vestibulum iaculis sit amet leo id vehicula. Aenean efficitur nec nisl sit amet lobortis. Nulla sed quam quis purus blandit faucibus. Maecenas pharetra varius nisi, quis varius arcu volutpat id. Suspendisse potenti. Nulla auctor erat ut purus fermentum venenatis. Morbi enim odio, pellentesque vitae elit ut, tincidunt laoreet lectus. Morbi lacinia efficitur tellus non ultricies. In sed enim euismod erat hendrerit pharetra. Aenean sit amet sollicitudin ex.

                                    Integer fringilla dolor at libero interdum, id pretium eros gravida. Nunc rhoncus a lectus a ullamcorper. Duis cursus maximus urna, sed gravida metus vulputate eget. Donec maximus lorem scelerisque nisl consectetur mollis. Donec venenatis lacus sed tortor egestas molestie. Phasellus et nisl gravida, vestibulum urna ut, placerat purus. Cras vel nunc feugiat, convallis magna vitae, imperdiet ex. Donec est velit, ultricies et nisl eget, ullamcorper dapibus urna. Sed sit amet hendrerit nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget mi ac nisl auctor rhoncus et non enim. Nulla lacinia id turpis a pulvinar. Integer aliquam quam dui, vel placerat urna ullamcorper eget. Suspendisse arcu urna, commodo quis ante id, elementum mollis lectus. Aliquam enim risus, hendrerit sed turpis et, ultrices sagittis tortor. Donec sagittis rhoncus nibh, a mattis ex commodo et.

                                    Donec tempus blandit pharetra. Aliquam id sagittis diam. Curabitur condimentum posuere nisl nec porta. Proin eu mauris ultricies, fringilla enim maximus, facilisis neque. Sed lobortis, diam id sagittis dignissim, est metus posuere nisi, ut efficitur lectus est a orci. Fusce vulputate arcu sed libero iaculis, ac vestibulum nunc interdum. Curabitur velit nisi, ullamcorper sed nibh non, ornare scelerisque dui. Aliquam urna mi, consectetur vel sem ut, mollis iaculis ex. In hac habitasse platea dictumst.

                                    Integer quam purus, tempor vel lacus eu, pretium condimentum odio. Sed accumsan erat nec congue commodo. Etiam rutrum in elit et viverra. Integer scelerisque vel ex auctor iaculis. Sed egestas eleifend pharetra. Vestibulum ut lectus eros. Sed sollicitudin lorem id arcu congue commodo. Donec in consectetur felis. Sed dapibus tellus turpis, non commodo odio varius ac. Proin luctus, orci vel consequat porttitor, massa tortor rutrum tortor, eu gravida sapien mi sed arcu. Donec sit amet ex felis. Proin eget elementum erat. Duis a feugiat risus, et laoreet diam.

                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis condimentum urna. Cras blandit, libero vulputate elementum tempor, purus magna ultrices elit, non tincidunt nunc massa at nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam pharetra varius ex ut fringilla. Nullam at augue lorem. Praesent erat ligula, accumsan eu tincidunt sed, eleifend eget orci. Quisque eu consequat tortor. Integer luctus nunc ut purus lobortis, nec faucibus nisl ornare. Morbi at eleifend leo. Nullam orci nisl, ultricies in aliquam vel, sagittis non ante. Integer magna urna, varius et felis sed, vestibulum pulvinar purus. Nullam consequat finibus lorem, vitae vulputate mi ullamcorper vel. Curabitur lacinia massa quis mi sodales, id elementum orci gravida. Sed sed erat felis. Proin condimentum, urna eget hendrerit consequat, risus metus dignissim ex, nec dapibus elit sapien vitae elit.

                                    Nunc viverra interdum nunc eu volutpat. Mauris luctus dolor ut metus scelerisque, in ultrices turpis lobortis. Nam vitae fringilla nisl. Integer euismod dui augue, eu facilisis velit ornare ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eleifend tellus vitae vestibulum consectetur. Duis ornare ultricies ex id scelerisque. Maecenas vulputate justo vitae massa vehicula fermentum. Fusce quis sem orci. Praesent mollis lacinia tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam elit.
                                </div>
                            </div>
                        </Tab>
                        <Tab label="ACTIVITY" >
                            activity1
                            activity2
                            activity3
                        </Tab>
                    </Tabs>
                </div>

                <div className="drawer-container">
                    <Drawer open={true} >
                        ddddd
                    </Drawer>
                </div>
            </div>
        )
    }
}

export default TeamTaskManager

