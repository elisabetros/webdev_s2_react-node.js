import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ProfilePage from './component/profile_page/ProfilePage';
import Bus from './component/Bus';
import ButtonWithProps from './component/button/ButtonWithProps';
import NewPage from './component/new-page/NewPage';
import ButtonWithChildren from './component/button/ButtonWithChildren';

// class App extends React.Component{
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // navPage: 'Bus',
      pageToRender: undefined
    };
  }

  // handleNavButtonClick = (navPage) => {
  //   if(navPage === 'Bus'){
  //     this.setState({ pageToRender : <Bus /> });
  //   }else if(navPage === 'ProfilePage'){
  //     this.setState({ pageToRender: <ProfilePage /> });
  //   }else {
  //   this.setState({ pageToRender:  <NewPage /> });
  //   }
  // };

  handleButtonClicked = (text) => {
    console.log(text)
  }
  
  render() {
    const { pageToRender } = this.state;
    // const 
    return (
      <div className="App">
        <h1>First React project</h1>
        <ButtonWithProps buttonText={"Submit"} customStyle={{backgroundColor:"blue"}} 
          onButtonClicked={ () => this.handleButtonClicked("custom click")}/>
        <ButtonWithProps onButtonClicked={ () => this.setState({ pageToRender: <Bus/> })} 
          buttonText={"Bus Page"} />
        <ButtonWithProps onButtonClicked={ () => this.setState({ pageToRender: <ProfilePage/> })}
           buttonText={"Profile Page"} />
        <ButtonWithProps onButtonClicked={ () => this.setState({ pageToRender:<NewPage/> })}
           buttonText={"New Page"}/>
        <ButtonWithChildren>Button Text</ButtonWithChildren>
        <ButtonWithChildren></ButtonWithChildren>
        { pageToRender }

      {/* {
        navPage === 'Bus' ? 
       <Bus/> :
       (navPage === 'ProfilePage' ?
       <ProfilePage /> :
       <PointlessDivPage /> )         
       } */}
      </div>
    );
  }
}
// class Paragraph extends Component{
//   render() {
//     return(
//          <p>This is a paragraph</p>
//         )
//   }
// }
    
  
// class More extends Component{
//   render() {
//     return(
//       <div className="testing">
//         <p>This is another one</p>
//         <p>{studentArray[0].name}</p>
//       </div>
//     )
//   }
// }

class Student {
  constructor(name, courses){
      this.name = name;
      this.courses = courses;
  }
}
const studentArray = [];
const student1 = new Student ("Student 1 ", ["Course1", "Course2"])
studentArray.push(student1)
const student2 = new Student ("Lísbet", ["Course2", "Course3"])
studentArray.push(student2)
// console.log(studentArray)

export default App;


