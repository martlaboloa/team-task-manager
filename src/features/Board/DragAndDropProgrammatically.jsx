import React, { Component } from 'react'


class DragAndDropProgrammatically extends Component {
    state = { sectionId: '', sectionNewIndex: -1 }

    render() {
        return (
            <form
                style={{
                    position: 'absolute',
                    width: '200px',
                    height: '300px',
                    backgroundColor: 'skyblue',
                    border: '1px black solid',
                    left: '20px',
                    wordBreak: 'break-all',
                }}

                onSubmit={(e) => {
                    e.preventDefault()

                    const { sectionId, sectionNewIndex } = this.state

                    console.log('DnD Prog, onSubmit: ', sectionId, sectionNewIndex)
                }}
            >
                <div>Drag and Drop</div>
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

export default DragAndDropProgrammatically
