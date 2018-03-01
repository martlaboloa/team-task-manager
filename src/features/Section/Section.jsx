import React, { Component } from 'react'
import { List } from 'material-ui/List'
import Task from '../Task'

class Section extends Component {
    render() {
        return (
            <div className="section-container">
                <List >
                    <Task />

                    <Task />

                    <Task />

                    <Task />
                </List>
            </div>
        )
    }
}

export default Section
