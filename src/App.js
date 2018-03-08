import React, { Component } from 'react'

/*
apply application styles
 */
import './styles'

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

/*
main react component import
 */
import TeamTaskManager  from './features'

/*
configuring store
 */
const store = configureStore(
    undefined,
    applyMiddleware(),
    reducer,
)


class App extends Component {
  render() {
    return (
        /*
        claim root as react dnd context
         */
        <DragDropContextProvider backend={HTML5Backend}>
            /*
            apply material ui themes.
            required to use material ui components.
             */
            <MuiThemeProvider>
                <Provider store={store}>
                    /*
                    main react component
                     */
                    <TeamTaskManager />
                </Provider>
            </MuiThemeProvider>
        </DragDropContextProvider>
    )
  }
}

export default App
