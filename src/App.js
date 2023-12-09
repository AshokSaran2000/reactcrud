import './App.css';
import Create from './Components/Create';
import Read from './Components/read';
import Update from './Components/update';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React CRUD Operations</h2>
        <Routes>
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

