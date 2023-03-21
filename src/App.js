import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/user/Homepage';
import Profile from './components/user/Profile';
import TopMenu from './components/user/TopMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TopMenu />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/p" element={<Profile />} />
          </Routes>

      </header>
    </div>
  );
}

export default App;
