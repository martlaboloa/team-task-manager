import React, { Component } from 'react'

/*
apply application styles
 */
import './styles/index.css'

/*
react dnd imports
 */
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

/*
material ui theme provider
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/*
redux store imports
 */
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configure'
import reducer from './store/reducer'
import analytics from './store/middlewares/analytics'


/*
main react component import
 */
import TeamTaskManager  from './features'

/*
configuring store
 */
const store = configureStore(
    undefined,
    applyMiddleware(analytics),
    reducer,
)


/*
claim root as react dnd context

apply material ui themes.
required to use material ui components.

main react component
 */
class App extends Component {
  render() {
    return (
        <DragDropContextProvider backend={HTML5Backend}>
            <MuiThemeProvider>
                <Provider store={store}>
                    <TeamTaskManager />
                </Provider>
            </MuiThemeProvider>
        </DragDropContextProvider>
    )
  }
}

export default App
