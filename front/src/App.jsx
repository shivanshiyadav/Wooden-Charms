import { SnackbarProvider } from 'notistack'
import React from 'react'
import'./App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Navoffer from './components/Navoffer';
import Trackorder from './components/Trackorder';
import Livingnav from './components/Livingnav';
import Bed from './components/Bed';
import Login from './components/login';
import Diningset from './components/Diningset';
import Study from './components/study';
import AddFurniture from './components/AddFurniture';


const App = () => {
  return (
    <div>
     
      <SnackbarProvider>
        
        <BrowserRouter>
       <Navbar/>
 
        <Routes>
        
        <Route path= '/' element= {<Home /> }/>
        <Route path= 'SignIn' element= {<SignIn/> }/>
        <Route path= 'Navoffer' element= {<Navoffer/> }/>
        <Route path= 'Trackorder' element= {<Trackorder/> }/>
        <Route path= 'Livingnav' element= {<Livingnav/> }/>
        <Route path= 'Bed' element= {<Bed/> }/>
        <Route path= 'Login' element= {<Login/> }/>
        <Route path= 'Dining' element= {<Diningset/> }/>
        <Route path= 'Study' element= {<Study/> }/>
        <Route path= 'addfurniture' element= {<AddFurniture/> }/>
       
      
        
       
      
        </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App