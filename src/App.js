import React from 'react'
import Homepage from './homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Create from './create';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Homepage />}></Route>
        <Route exact path='/start-petition' element={< Create />}></Route>
      </Routes>
    </Router>
  );
}



export default App;