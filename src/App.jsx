import './App.css'
import { Fragment } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/mainScope/main';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes >
          <Route path="/" element={<Main />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App
