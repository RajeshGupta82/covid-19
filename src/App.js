import React, { useState,useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomeComponent from "./components/HomeComponent"
import FormComponent from "./components/FormComponent"
import NavbarComponent from "./components/NavbarComponent"
import AuthComponent from "./components/AuthComponent"
import {Container} from 'reactstrap';

function App() {
  const [login, setLogin] = useState(false)
  useEffect(()=>{

  })

  return (
    <>
    
      <div>
        <BrowserRouter>
        <NavbarComponent/>
        <Container>
        <Switch>
          {login ? 
          <>
            <Route path="/home" component={HomeComponent}/>
            <Route path="/FormComponent" component={FormComponent}/>
            <Redirect to="/home"/>
          </>:
          <>
            <Route path="/auth" component={()=><AuthComponent login={login} />}/>
            <Redirect to="/auth"/>
          </>
          }
        </Switch>  
        </Container>    
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
