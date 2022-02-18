import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Draw from './pages/Draw';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/draw' element={<Draw />} />
      </Routes>
    </Router>
  );
}

export default App;
