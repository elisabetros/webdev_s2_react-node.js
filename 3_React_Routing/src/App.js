import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import Theme from './pages/theme/Theme';
import Form from './pages/form/Form';
import BeerIcon from './pages/icons/Icons';
import { FaBeer } from 'react-icons/fa';

class App extends Component {
 state = {
   color: undefined,
   welcomeMessage : <h1>Welcome Stranger</h1>
  // user : undefined
 }
 componentDidMount (){
   const welcomeMessage = localStorage.getItem('welcomeMessage')
   if(welcomeMessage){
   this.setState({welcomeMessage: <h1>{welcomeMessage} <FaBeer/></h1>})
   }
 }
 
 onColorChange = (colorFromTheme) => {
   this.setState({ color:colorFromTheme });
  }
  onNameChange = (firstName, lastName) => {
    // console.log(firstName, lastName);
    if(firstName && lastName){
      const welcomeMessageString = `Welcome back ${firstName} ${lastName}` ;
      const welcomeMessage = <h1>{welcomeMessageString} <FaBeer/></h1>
      this.setState({ welcomeMessage })
      localStorage.setItem('firstName', firstName); 
      localStorage.setItem('welcomeMessage', welcomeMessageString);
    }
  }


  render() {
    // localStorage.clear()
    console.log(localStorage)
    const { backgroundColor, welcomeMessage} = this.state;
    return (
      <Router>
        <div className="App" style= {{backgroundColor}}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to ="/firstPage">First</Link>
              </li>
              <li>
                <Link to="/secondPage">Second</Link>
              </li>
              <li>
                <Link to ="/themePage">Theme</Link>
              </li>              
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/icons">Icons</Link>
              </li>
            </ul>
          </nav>


        <Switch>
          <Route exact path="/" 
          component={() => <div> {welcomeMessage}</div>} />            
          <Route path="/about" 
          component={(props) => <About {...props}/>}/> 
          <Route path="/firstPage"
          component={() => <FirstPage/>} />
          <Route path="/secondPage"
          component={() => <SecondPage />} />
          <Route path="/themePage" 
          component={() => <Theme propFromParent={this.onColorChange}/>} />
          <Route path="/form"
          component={(props) => <Form {...props} handleNameChange={this.onNameChange}/>} />
          <Route path="/icons"
          component={() => <BeerIcon />} />
        
        </Switch> 

      </div>
    </Router>
  );
}
}

export default App;
