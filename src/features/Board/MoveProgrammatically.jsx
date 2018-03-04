import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'


class MoveProgrammatically extends Component {
    state = { sectionId: '', sectionNewIndex: -1 }

    render() {
        return (
            <form
                style={{
                    position: 'absolute',
                    zIndex: 99,
                    width: '200px',
                    height: '300px',
                    backgroundColor: 'skyblue',
                    border: '1px black solid',
                    left: '20px',
                    opacity: 0.5,
                }}

                onSubmit={(e) => {
                    e.preventDefault()

                    const { sectionId, sectionNewIndex } = this.state
                    const { moveSection } = this.props

                    console.log('DnD Prog, onSubmit: ', sectionId, sectionNewIndex)

                    moveSection(sectionId, sectionNewIndex)
                }}
            >
                <div>test move without dnd
                </div>
                section Id:
                    <input
                        aria-label="awd"
                        style={{ display: 'flex' }}
                        onChange={(e) => {
                            this.setState({ ...this.state, sectionId: e.target.value})
                        }}
                    />
                section new index:
                    <input
                        aria-label="awd"
                        style={{ display: 'flex' }}
                        onChange={(e) => {
                            this.setState({ ...this.state, sectionNewIndex: parseInt(e.target.value, 10)})
                        }}
                    />
                <button>move section</button>
            </form>
        )
    }
}

export default connect(undefined, { moveSection: actions.moveSection })(MoveProgrammatically)
