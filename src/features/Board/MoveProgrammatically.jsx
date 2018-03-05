/* not part of project, only needed for testing in development mode, hence shitty code */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'


class MoveProgrammatically extends Component {
    state = {
        sectionId: '',
        sectionNewIndex: -1,

        taskId: '',
        taskNewIndex: - 1,
        taskSectionId: '',
    }

    render() {
        return (
            <div
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

            >
                <div>test move without dnd</div>

                <br />

                <form
                    onSubmit={(e) => {
                        e.preventDefault()

                        const { sectionId, sectionNewIndex } = this.state
                        const { moveSection } = this.props

                        console.log('DnD section, onSubmit: ', sectionId, sectionNewIndex)

                        moveSection(sectionId, sectionNewIndex)
                    }}
                >
                    section Id:
                    <input
                        style={{ display: 'flex' }}
                        onChange={(e) => {
                            this.setState({ ...this.state, sectionId: e.target.value})
                        }}
                    />
                    section new index:
                    <input
                        style={{ display: 'flex' }}
                        onChange={(e) => {
                            this.setState({ ...this.state, sectionNewIndex: parseInt(e.target.value, 10)})
                        }}
                    />
                    <button>move section</button>
                </form>

                <br />

                <form
                    onSubmit={(e) => {
                        e.preventDefault()

                        const { taskId, taskNewIndex, taskSectionId } = this.state
                        const { moveTask } = this.props

                        console.log('DnD task, onSubmit: ', taskId, taskNewIndex, taskSectionId)

                        moveTask(taskId, taskNewIndex, taskSectionId)
                    }}
                >
                    task Id:
                    <input
                        style={{ display: 'flex' }}
                        onChange={(e) => {
                            this.setState({ ...this.state, taskId: e.target.value})
                        }}
                    />
                    task new index:
                    <input
                        style={{ display: 'flex' }}
                        onChange={(e) => {
                            this.setState({ ...this.state, taskNewIndex: parseInt(e.target.value, 10)})
                        }}
                    />
                    task section Id:
                    <input
                        style={{ display: 'flex' }}
                        onChange={(e) => {
                            this.setState({ ...this.state, taskSectionId: e.target.value})
                        }}
                    />
                    <button>move task</button>
                </form>
            </div>
        )
    }
}

export default connect(undefined, {
    moveSection: actions.moveSection,
    moveTask: actions.moveTask,
})(MoveProgrammatically)
