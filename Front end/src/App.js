import React from 'react';
import {Routes, BrowserRouter, Route, } from 'react-router-dom'
import Chart from './Component/Chart.js';
import Navbar from './Navbar/Navbar.js'
import ChartByTopic from './Component/ChartByTopic.js';
import ChartBySector from './Component/ChartBySector.js';
import ChartByEndyear from './Component/ChartByEndYear.js';
import ChartByRegion from './Component/ChartByRegion.js';
import ChartByCountry from './Component/ChartByCountry.js';



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/' Component={Chart }/>
      <Route exact path='/catogary/topic/' Component={ChartByTopic}/>
      <Route exact path='/catogary/sector/' Component={ChartBySector}/>
      <Route exact path='/catogary/end_year/' Component={ChartByEndyear}/>
      <Route exact path='/catogary/region/' Component={ChartByRegion}/>
      <Route exact path='/catogary/country/' Component={ChartByCountry}/>
      <Route path='*' Component={<h1>Error 404! page not Found....</h1>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
};

export default App;
