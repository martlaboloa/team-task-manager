import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TeamTaskManager  from './features'

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <TeamTaskManager />
        </MuiThemeProvider>
    )
  }
}

export default App;
