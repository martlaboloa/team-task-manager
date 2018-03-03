import React, { Component } from 'react'
import { List } from 'material-ui/List'
import Task, { CreateNewTask } from '../Task'
import SectionHeader from './SectionHeader'

class Section extends Component {
    render() {
        return (
            <div className="section-container">
                <SectionHeader />

                <List className="section-list">

                    <Task />

                    <Task />

                    <Task />

                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
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
