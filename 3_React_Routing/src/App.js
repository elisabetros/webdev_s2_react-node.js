import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import ThirdPage from './pages/thirdPage/ThirdPage';
import Theme from './pages/theme/Theme';

class App extends Component {
 state = {
   color: undefined
 }
  onColorChange = (colorFromTheme) => {
    console.log(colorFromTheme)
    this.setState({ color:colorFromTheme });
  }
  render() {
    return (
      <Router>
        <div className="App" style= {{backgroundColor:this.state.color}}>
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
                <Link to="/thirdPage">Third</Link>
              </li>
              <li>
                <Link to ="/themePage">Theme</Link>
              </li>
            </ul>
          </nav>


        <Switch>
          <Route exact path="/" 
          component={(props) => <h1>This is the index page</h1> } />
          <Route path="/about" 
          component={(props) => <About {...props}/>}/> 
          <Route path="/firstPage"
          component={() => <FirstPage/>} />
          <Route path="/secondPage"
          component={(props) => <SecondPage {...props} />} />
          <Route path="/thirdPage"
          component={(props) => <ThirdPage {...props} />} />
          <Route path="/themePage" 
          component={(props) => <Theme {...props} propFromParent={this.onColorChange}/>} />
        </Switch> 

      </div>
    </Router>
  );
}
}

export default App;
