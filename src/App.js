import React from 'react';
import HomePage from './pages/home'
import { Provider as ReduxProvider } from "react-redux"
import configureStore from './modules/store'


const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <HomePage />
      </div>      
    </ReduxProvider>
  );
}

export default App;
