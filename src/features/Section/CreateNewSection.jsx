import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import ImageLens from 'material-ui/svg-icons/image/lens'
import actions from '../store/actions'

const btnStyles = {
    height: 'calc(100% - 4px)',
    width: '100%',
}

const childrenContStyles = {
    display: 'flex',
    position: 'absolute',
    color: '#ababab',
    bottom: '94%',
    left: '3%',
}

class CreateNewSection extends Component {
    state = { creatingSection: false }

    onClickCreateBtn = () => {
        this.setState({ creatingSection: true })
    }

    onKeyDownCreatingField = (e) => {
        const { keyCode, target: { value } } = e

        if (keyCode === 13 && value !== null && value !== undefined && value !== '') {
            const { addSection } = this.props

            addSection(value)

            this.setState({ creatingSection: false })
        }
    }

    onBlurCreatingField = (e) => {
        const { target: { value } } = e

        if (value !== null && value !== undefined && value !== '') {
            const { addSection } = this.props

            addSection(value)

        }

        this.setState({ creatingSection: false })
    }

    render() {
        return [
            this.state.creatingSection ?
                <div key="creatingSection" className="section-container">
                    <IconButton >
                        <ImageLens color={'#ff0000'} viewBox="0 0 50 20" />
                    </IconButton>

                    <TextField
                        hintText="Section name"
                        autoFocus
                        onKeyDown={this.onKeyDownCreatingField}
                        onBlur={this.onBlurCreatingField}
                    />
                </div>
                : null,
            <div key="createSecBtn" className="create-new-section-btn" >
                <FlatButton
                    style={btnStyles}
                    onClick={this.onClickCreateBtn}
                >
                    <div style={childrenContStyles}>
                        <ContentAdd color="#747474" style={{ margin: '5px' }} />New Section
                    </div>
                </FlatButton>
            </div>,
        ]

    }
}

export default connect(undefined, { addSection: actions.addSection })(CreateNewSection)
