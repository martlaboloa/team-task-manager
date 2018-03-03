import React, { Component } from 'react'

import IconButton from 'material-ui/IconButton'
import ImageLens from 'material-ui/svg-icons/image/lens'
import TextField from 'material-ui/TextField'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import ActionDelete from 'material-ui/svg-icons/action/delete';


class SectionHeader extends Component {
    render() {
        return (
            <div className="section-header">
                <IconButton >
                    <ImageLens color={'#ff0000'} viewBox="0 0 50 20" />
                </IconButton>

                <TextField
                    hintText="Section name"
                    underlineStyle={{ borderColor: 'transparent' }}
                    underlineFocusStyle={{ borderColor: 'transparent' }}
                />

                <IconMenu
                    iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Delete" leftIcon={<ActionDelete />}>
                    </MenuItem>
                </IconMenu>
            </div>
        )
    }
}

export default SectionHeader
