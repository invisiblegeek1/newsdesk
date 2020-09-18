import React from 'react';


import './App.css';
import Navbar from "./navbar/navbar";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import {Card} from './component'

function App() {
  

  return (
    <Router>   
    <div className="App">
    <Navbar/>
    <div className="container">
      <Switch>
    <Route path="/" exact  component={()=><Card title="top-headlines"/>} />
    <Route path="/business" exact  component={()=><Card title="business"/>} />
    <Route path="/science" exact  component={()=><Card title="science"/>} />
     <Route path="/entertainment" exact  component={()=><Card title="entertainment"/>} />
      <Route path="/health" exact  component={()=><Card title="health"/>} />
       <Route path="/technology" exact  component={()=><Card title="technology"/>} />
    
      </Switch>
      </div>
    </div>
    </Router>    
  );
}

export default App;
