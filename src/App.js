import Home from './ssssss/sss'
import About from './ssssss/ssss'
import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Link to='/Home'>
          Home
        </Link>

        <Link to='/About'>
          About
        </Link>
      </div>

      <Routes>

        <Route path='/Home' element={<Home/> }>
        </Route>

        <Route path='/About' element={<About/> }>
        </Route>

      </Routes>
    </Router>
  );
 
}

export default App;
