import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add';

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
    render() {
        return (
            <div className="create-new-section-btn" >
                <FlatButton
                    style={btnStyles}
                    onClick={() => {
                        console.log('aaa')
                    }}
                >
                    <div style={childrenContStyles}>
                        <ContentAdd color="#747474" style={{ margin: '5px' }} />New Section
                    </div>
                </FlatButton>
            </div>
        )
    }
}

export default CreateNewSection
