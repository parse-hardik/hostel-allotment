import React, {Component} from 'react';
import Profile from './Profile';
import './Home.css';
import Roles from './Roles.js';

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
          this.setState({role:'leader'})
        else
          if(res.member===true)
            this.setState({role:'member'})
          else
            this.setState({role:'none'})
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
							return <Profile username={this.props.username} email={this.props.email} role={this.state.role}/>
					})()
				}
			</div>
		);
	}
}
export default Home;