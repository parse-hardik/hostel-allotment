import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import './App.css';



class App extends Component{
  constructor()
  {
    super();
    this.state={
      route:'signin',
      isSignedIn:'false',
      username:'',
      role:'',
    }
  }
  componentDidMount(){
    
  }

  onRegister=(event)=>{
    this.setState({route:'register'});
  }

  Back=(event)=>{
    this.setState({route: 'signin'});
  }

  onSignIn=(event)=>{
    this.setState({route:'registered'});
  }

  giveUsername=(user)=>{
    this.setState({username:user});
  }

  render(){
      return (
          <div>
          {
            this.state.route==='register'?  <Register Back={this.Back}/>
            :
              this.state.route==='registered'? <Dashboard username={this.state.username} />
            :
              <SignIn onRegister={this.onRegister} onSignIn={this.onSignIn} giveUsername={this.giveUsername}/>
          }
          
          </div>
          
      );
  };
}

export default App;
