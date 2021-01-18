import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./component";
import Readmore from "./readmore";
import {Foot} from "./footer";


function ComponentsWrapper() {
  const [State, setState] = useState({
    checked: false,
    navBarColor: "rgba(28, 12, 215,1)",
    ContainerColor:'#f2f5ff',
    CardColor:'white',
    TextColor:"#000"


  });
  function handleChange(event) {
    if (!State.checked) {
      setState({
        ...State,
        [event.target.name]: event.target.checked,
        navBarColor: "#121212",
        ContainerColor:'#000',
        CardColor:'#303237',
        TextColor:"#ffffff"
      });

    }
    else if (State.checked) {
      setState({ State, navBarColor: "rgba(28, 12, 215,1)" });
    }
    

  }
    return (
        <div>
            <Router>
     
        <Navbar  onStateChange={handleChange} State={State}/>
        
        <div id="container" style={{padding:'0px',margin:'0px',backgroundColor:State.ContainerColor}}>
          <Switch>
            <Route path="/" exact render={() => <Card title="" Style={State} />} />
            <Route
            
              path="/business"
              exact
              component={() => <Card title="business" Style={State} />}
            />
            <Route
              path="/science"
              exact
              component={() => <Card title="science" Style={State} />}
            />
            <Route
              path="/entertainment"
              exact
              component={() => <Card title="entertainment" Style={State} />}
            />
            <Route
              path="/health"
              exact
              component={() => <Card title="health" Style={State} />}
            />
            <Route
              path="/technology"
              exact
              component={() => <Card title="technology" Style={State} />}
            />
            <Route
              path="/sports"
              exact
              component={() => <Card title="sports" Style={State} />}
            />
            <Route
             path="/search/:id"
             exact 
             component={() => <Card Style={State} />} 
             />
            <Route 
            path="/readmore/:id" 
            exact 
            component={()=><Readmore Style={State} />} 
            />
          </Switch>
        </div>
        
      
      <Foot  Style={State}/>
    </Router>
            
        </div>
    )
}

export default ComponentsWrapper
