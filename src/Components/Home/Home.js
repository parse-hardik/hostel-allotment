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
		await fetch('https://hostelserver.herokuapp.com/getRole',{
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
          // console.log(res);
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
                <div>
              <div className="home-page">

              <Profile username={this.props.username} email={this.props.email} role={this.state.role} className="Profile"/>
              
              <Timer className="Timer" />
              </div>
              <div className="guidelines">
                <h1>Some Guidelines:</h1>
                <p>1. The whole process is divided into two sprints. During sprint 1 your aim is to find a suitable group. In sprint 2 the team leader of group will have to select a suitable wing by going to the <b>Layout Tab</b> </p>
                <p>
                  2. As a leader, you can only send requests to members and not other team leaders by going to the <b>Users Tab</b>.As a member, you can only send requests to leaders and not other team members by going to the <b>Groups Tab</b> If you are a leader, and already have your grp full, you cannot send any more requests.
                </p>
                <p>
                  4.The admin sets the timer for the sprints and they can be seen in the <b>Home Tab</b>
                </p>
                <p>
                  5. You can view your notifications in the <b>Notifications Tab</b>.
                </p>
              </div>
              
              </div>
              )
					})()
				}
			</div>
		);
	}
}
export default Home;