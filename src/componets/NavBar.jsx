import React, { useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import OptionsGrid from './OptionsGrid'; // Import the grid component
import UserHome from './UserHome';
import { AccordionDetails, AppBar, Button, Tab,Tabs, Toolbar, Typography } from '@mui/material'
import JobBoard from './JobBoard';
import ExplorePeople from './ExplorePeople';
import Chat from './Chat';
import Notifications from './Notifications';
import Skills from './Skills/Skills';

function NavBar() {
  const [showOptions, setShowOptions] = useState(false); // Toggle options grid
  const navigate = useNavigate();
  const [val,setVal]=useState('0');


  return (
    <div>

      <nav className="navbar">
        <h1>Skilldin</h1>
        <input
          type="text"
          placeholder="Search talents..."
          // Hide options when search is not focused
        />
        <div className="nav-links">
         
               
                
                <Tabs textColor='inherit' value={val}
                onChange={(e,value)=>setVal(value)}
                 indicatorColor='secondary'>
                <Tab label="Profile"  sx={{fontSize:"20px" }}></Tab>
                <Tab label="Jobs Requirements" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Explore People" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Talents" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Messages" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Notifications" sx={{fontSize:"20px" }} ></Tab>
               
                
                
                </Tabs>
               
           
             

        </div>
      </nav>

      {/* Display Options Grid */}
      {/* Show grid when search bar is focused */}
     
     {
      val==1? (<JobBoard/>):
      val==2?(<ExplorePeople/>):
      val==3? (<Skills/>):
      val==4?(<Chat/>):
      val==5?(<Notifications/>):
      (<UserHome/>)
     }

    
    </div>
  );
}

export default NavBar;
