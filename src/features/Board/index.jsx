import React, { Component } from 'react'
import Section, { CreateNewSection } from '../Section'


class Board extends Component {
    render() {
        return (
            <div className="board-container" >
                <Section />

                <Section />

                <CreateNewSection />
            </div>
        )
    }
}

export default Board
