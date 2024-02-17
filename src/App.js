import './App.css'

import React from "react";

import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom";

import Home from './components/home/home';
import Error from './components/error/error';
import Service_1 from './components/service_pages/s_page_1';
import Service_2 from './components/service_pages/s_page_2';
import Service_3 from './components/service_pages/s_page_3';
import Get_started from './components/get_started/get_started'
import Popup from './components/popup/popup';



function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/*' element={<Error/>}/>
       <Route path='/Service_1' element={<Service_1/>}/>
       <Route path='/Service_2' element={<Service_2/>}/>
       <Route path='/Service_3' element={<Service_3/>}/>
       <Route path='/Get_started' element={<Get_started/>}/>
       <Route path='/Popup' element={<Popup/>}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
