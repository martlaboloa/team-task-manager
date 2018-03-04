import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import ImageLens from 'material-ui/svg-icons/image/lens'
import TextField from 'material-ui/TextField'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { getSectionName, getSectionIconColor } from '../store/selectors'
import actions from '../store/actions'


class SectionHeader extends Component {
    onClickDelMenuItem = () => {
        const { deleteSection } = this.props

        deleteSection()
    }

    render() {
        const { sectionName, sectionIconColor } = this.props

        return (
            <div className="section-header">
                <IconButton >
                    <ImageLens color={sectionIconColor} viewBox="0 0 50 20" />
                </IconButton>

                <TextField
                    hintText={sectionName}
                    underlineStyle={{ borderColor: 'transparent' }}
                    underlineFocusStyle={{ borderColor: 'transparent' }}
                />

                <IconMenu
                    iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem
                        primaryText="Delete"
                        leftIcon={<ActionDelete />}
                        onClick={this.onClickDelMenuItem}
                    >
                    </MenuItem>
                </IconMenu>
            </div>
        )
    }
}

export default connect(
    (state, { sectionId }) => ({
        sectionName: getSectionName(state, sectionId),
        sectionIconColor: getSectionIconColor(state, sectionId)
    }),
    (dispatch, { sectionId }) => bindActionCreators({
        deleteSection: () => actions.deleteSection(sectionId),
    }, dispatch)
)(SectionHeader)
