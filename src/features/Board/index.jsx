import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoveProgrammatically from './MoveProgrammatically'
import { getSectionOrder } from '../store/selectors'
import Section, { CreateNewSection } from '../Section'


const Sections = ({ sectionOrder }) => sectionOrder.map(id => <Section key={id} id={id} />)

class Board extends Component {
    render() {
        const { sectionOrder } = this.props

        return (
            <div className="board-container" >
                {/*<MoveProgrammatically />*/}

                <Sections sectionOrder={sectionOrder} />

                <CreateNewSection />
            </div>
        )
    }
}

export default connect(state => ({
    sectionOrder: getSectionOrder(state),
}))(Board)
