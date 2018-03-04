import React, { Component } from 'react'
import { List } from 'material-ui/List'
import Task, { CreateNewTask } from '../Task'
import SectionHeader from './SectionHeader'

class Section extends Component {
    render() {
        const { id } = this.props

        return (
            <div className="section-container">
                <SectionHeader sectionId={id} />

                <List className="section-list">

                    <Task />

                    <Task />

                    <Task />

                    <Task />

                    <CreateNewTask />
                </List>
            </div>
        )
    }
}

export default Section
