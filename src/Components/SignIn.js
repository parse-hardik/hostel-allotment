import React from 'react';
import { Link,BrowserRouter as Router } from 'react-router-dom';
import Particles from 'react-particles-js';
import './SignIn.css';
// import API from '../Utils/API';
// const {Users} = require('.../models/Users');

const particlesOptions={
  particles: {
    number:{
      value: 100,
      density:{
        enable: true,
        value_area: 800
      },
    line_linked:{
      color:'#000000',
    }  
    },
    move: {
      speed: 4
    }
  },
  interactivity: {
    onhover: {
      enable: true,
      mode: 'repulse',
    },
    detect_on: 'canvas'
  },
}

class SignIn extends React.Component {
	constructor(){
		super();
		this.state={
			username:'',
			password:'',
		}
	}

	onUsernameChange=(event)=>{
		this.setState({username:event.target.value});
	}

	onPasswordChange=(event)=>{
		this.setState({password:event.target.value});
	}

	checkUser=(event)=>{
    fetch('https://hostelserver.herokuapp.com/signIn',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then((res)=>res.json())
      .then((res)=>{
        if(res.name!==undefined){
          this.props.giveUsername(this.state.username);
          this.props.onSignIn();
          res.name==='admin'? window.localStorage.setItem('isAdmin',true): window.localStorage.setItem('isAdmin',false);
        }
        else
          alert('Incorrect combination');
      }).catch((err)=>console.log(err));
	}

	render(){
		return(
      <Router>
			<div>
				<Particles className='me particles'
            params={particlesOptions} 
          />
      			<div>
      			<article className="br4 ba us dark-gray b--white-30 mv4 w-200 w-50-m w-25-1 mw6 center shadow-5 bg-transparent">
      			<main className="pa4 white-80">
      			  <div className="measure">
      			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
      			      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
      			      <div className="mt3">
      			        <label className="db fw6 lh-copy f3" htmlFor="username">Username</label>
      			        <input onChange={this.onUsernameChange} className="pa2 b--white-20 input-reset ba w-100 text" type="text" name="username"  id="username" />
      			      </div>
      			      <div className="mv3">
      			        <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
      			        <input onChange={this.onPasswordChange} className="b pa2 b--white-20 input-reset ba w-100 text" type="password" name="password"  id="password" />
      			      </div>
      			    </fieldset>
      			    <div className="flex justify-around">
                  <Link to="/dashboard">
      			       <input onClick={this.checkUser} className="b ph3 pv2 white input-reset ba b--white-20 bg-transparent grow pointer f4 dib" type="submit" value="Sign in" />
      			    	</Link>
                  <input onClick={this.props.onRegister} className="b ph3 pv2 white input-reset ba b--white-20 bg-transparent grow pointer f4 dib" type="submit" value="Register" />
      			    </div>
      			  </div>
      			</main>
      			</article>
      		</div>
      </div>
      </Router>
		);
	}
}
export default SignIn;