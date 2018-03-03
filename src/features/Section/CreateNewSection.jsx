import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add';

const btnStyles = {
    height: 'calc(100% - 4px)',
    width: '100%',
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
                    <div style={{
                        display: 'flex',
                        position: 'absolute',
                        bottom: '0px',
                        color: '#ababab',
                        bottom: '93%',
                        left: '3%',
                    }}>
                        <ContentAdd color="#747474" style={{ margin: '5px' }} />New Section
                    </div>
                </FlatButton>
            </div>
        )
    }
}

export default CreateNewSection
