import React from 'react';
import Home from './Home';
import Register from './Register';
import Courses from './Courses';
import About from './About';
import { Route, Switch,Redirect } from 'react-router';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';




const App = () => {
  return (
    <div>
    <Navbar />
    <Switch>
    <Route exact path="/"  component={Home}/>
    <Route exact path="/about"  component={About}/>
    <Route exact path="/courses"  component={Courses}/>
    <Route exact  path="/register"  component={Register}/>
    <Redirect to="/" />
    </Switch>
  
    
</div>
  )
}

export default App;
