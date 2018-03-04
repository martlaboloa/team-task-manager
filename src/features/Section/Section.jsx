import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui/List'
import Task, { CreateNewTask } from '../Task'
import SectionHeader from './SectionHeader'
import { getTaskOrder } from '../store/selectors'

const Tasks = ({ taskOrder, sectionId }) => taskOrder.map(id => <Task key={id} id={id} sectionId={sectionId} />)

class Section extends Component {
    render() {
        const { id, taskOrder } = this.props

        return (
            <div className="section-container">
                <SectionHeader sectionId={id} />

                <List className="section-list">

                    <Tasks taskOrder={taskOrder} sectionId={id}/>

                    <CreateNewTask sectionId={id} />
                </List>
            </div>
        )
    }
}

export default connect((state, { id }) => ({
    taskOrder: getTaskOrder(state, id),
}))(Section)
