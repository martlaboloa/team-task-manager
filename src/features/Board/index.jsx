import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSectionOrder } from '../store/selectors'
import Section, { CreateNewSection } from '../Section'
import DragAndDropProgrammatically from './DragAndDropProgrammatically'


const Sections = ({ sectionOrder }) => sectionOrder.map(id => <Section key={id} id={id} />)

class Board extends Component {
    render() {
        const { sectionOrder } = this.props

        return (
            <div className="board-container" >
                <DragAndDropProgrammatically />

                <Sections sectionOrder={sectionOrder} />

                <CreateNewSection />
            </div>
        )
    }
}

export default connect(state => ({
    sectionOrder: getSectionOrder(state),
}))(Board)
