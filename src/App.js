
import { BrowserRouter, Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componets/Home';
import UserHome from './componets/UserHome';
import { Buffer } from 'buffer';
import JobBoard from './componets/JobBoard';

import NavBar from './componets/NavBar';
import SkillsDetails from './componets/SkillDetails/SkillDetails.jsx';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/home/:userid" element={<NavBar />} ></Route>
       <Route path='/job' element={<JobBoard/>}></Route>
       <Route path="/skills/:id" element={<SkillsDetails/>} />
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
