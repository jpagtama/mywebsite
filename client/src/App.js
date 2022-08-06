import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SideNav from './components/SideNav';
import Main from './components/Main';

const App = () => {
  return (
    <Provider store={store}>
      <SideNav />
      <Main />
    </Provider>
  )
}

export default App;