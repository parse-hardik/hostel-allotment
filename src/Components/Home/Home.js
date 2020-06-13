import React, {Component} from 'react';
import Profile from './Profile';
import './Home.css';
import Roles from './Roles.js';
import Timer from './Timer.js';

class Home extends Component{
	constructor()
  {
    super();
    this.state={
      role:'',
    }
  }
	async componentDidMount(){
		// console.log('username in home is',this.props.username);
		await fetch('http://localhost:5000/getRole',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: this.props.username,
        email: this.props.email
      })
    }).then((res)=>res.json())
      .then(res=>{
        if(res.leader===true)
        {
          this.setState({role:'leader'});
          window.localStorage.setItem('role','leader');
          window.localStorage.setItem('wing',res.wing);
          console.log(res);
        }
        else if(res.member===true)
          {
            this.setState({role:'member'});
            window.localStorage.setItem('role','member');
          }
        else if( window.localStorage.getItem('isAdmin')==="true")
        {
            this.setState({role:'Admin'});
            window.localStorage.setItem('role','admin');
        }
        else
          {
            this.setState({role:'none'});
            window.localStorage.setItem('role','none');
          }
          window.localStorage.setItem('group',res.gname)
        // console.log('checkRole is',this.state.role)  
        // this.props.setRole(this.state.role)
      })
      .catch(err=>console.log);
	}

	render(){
		return(
			<div>
				{
					(()=>{
						// console.log('checkRole in new function is',this.state.role);
						if(this.state.role==='none')
							return <Roles username={this.props.username} role={this.state.role}/>
						else
              return (
              <div className="home-page">
              <Profile username={this.props.username} email={this.props.email} role={this.state.role} className="Profile"/>
              <Timer className="Timer" />
              </div>
              )
					})()
				}
			</div>
		);
	}
}
export default Home;