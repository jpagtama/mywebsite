import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {Routes, Route} from 'react-router-dom';
import SideNav from './components/personal/SideNav';
import Main from './components/personal/Main';
import Flekin from './components/flekin/Flekin';

const App = () => {
  const welcome = <React.Fragment><SideNav /><Main /></React.Fragment >

  return (
    <Provider store={store}>
      <Routes >
        <Route path="/" element={welcome} />
        <Route path="/flekin/*" element={<Flekin />} />
      </Routes>
    </Provider>
  )
}

export default App;