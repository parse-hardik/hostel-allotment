import React, {Component} from 'react';
import Particles from 'react-particles-js';

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

class Register extends Component{

	constructor(){
		super()
		this.state={
			name:'',
			username:'',
			email:'',
			password:'',
			reenter:'',
		}
	}

	onNameChange=(event)=>{
		this.setState({name:event.target.value});
	}
	onUsernameChange=(event)=>{
		this.setState({username:event.target.value});
	}
	onEmailChange=(event)=>{
		this.setState({email:event.target.value});
	}
	onPasswordChange=(event)=>{
		this.setState({password:event.target.value});
	}
	onReEnter=(event)=>{
		this.setState({reenter:event.target.value});
	}
	joinUser=(event)=>{
		if(this.state.password===this.state.reenter && this.state.email.match(/.+@.+/))
		{
			fetch('http://localhost:5000/register',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        name:this.state.name,
        email:this.state.email,
        leader:false,
        member:false,
      })
    })
    .then((res)=>res.json())
      .then((res)=>{
      	console.log(res);
      	if(res.error.code===11000){
      		alert('Username Already exists!!');
      		return;
      	}
        if(res.name!==undefined){
          alert('New user created!');
          this.props.Back();
        }
        else
          alert('Incorrect combination');
      }).catch((err)=>{
      			console.log(err);	
      	});
		}
		else{
			if(this.state.password===this.state.reenter){
				alert('invalid email address');
			}
			else
				alert("Passwords don't match!");
		}
	}
	render(){
		return(
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
			        <label className="db fw6 lh-copy f3" for="username">Name</label>
			        <input onChange={this.onNameChange} className="pa2 b--white-20 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
			      </div>
			       <div className="mt3">
			        <label className="db fw6 lh-copy f3" for="username">Username</label>
			        <input onChange={this.onUsernameChange} className="pa2 b--white-20 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
			      </div>
			       <div className="mt3">
			        <label className="db fw6 lh-copy f3" for="username">Email</label>
			        <input onChange={this.onEmailChange} className="pa2 b--white-20 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f3" for="password">Password</label>
			        <input onChange={this.onPasswordChange} className="b pa2 b--white-20 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			       <div className="mt3">
			        <label className="db fw6 lh-copy f3" for="username">Re Enter Password</label>
			        <input onChange={this.onReEnter} className="pa2 b--white-20 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="username"  id="username" />
			      </div>
			    </fieldset>
			    <div className="flex justify-around">
			      <input onClick={this.joinUser} className="b ph3 pv2 white input-reset ba b--white-20 bg-transparent grow pointer f4 dib" type="submit" value="Register" />
			      <input onClick={this.props.Back}  className="b ph3 pv2 white input-reset ba b--white-20 bg-transparent grow pointer f4 dib" type="submit" value="Back" />
			    </div>
			  </div>
			</main>
		</article>
		</div>
		</div>
		);
	}
}
export default Register;