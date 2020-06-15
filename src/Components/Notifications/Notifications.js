import React, {Component} from 'react';
import NotifCardList from '../Home/NotifCardList';
import LeaderCardList from '../Home/LeaderCardList';

class Notifications extends Component{
	constructor()
	{
		super();
		this.state ={
			grps:[],
			role:''
		}
	}

	async componentDidMount(){

    await fetch('https://hostelserver.herokuapp.com/getRole',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: this.props.username
      })
    }).then((res)=>res.json())
      .then(res=>{
        if(res.leader===true)
          this.setState({role:'leader'});
        else
          if(res.member===true)
            this.setState({role:'member'});
          else
            this.setState({role:'none'});
        // console.log(res);
      })
      .catch(err=>console.log);

  if(this.state.role==='member')
  {
		await fetch('https://hostelserver.herokuapp.com/getNotifsformember',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: this.props.username
      })
    }).then((res)=>res.json())
      .then(res=>{
        this.setState({grps:res});
        console.log(res);
      })
      .catch(err=>console.log);
  }    

  if(this.state.role==='leader')
  {
    await fetch('https://hostelserver.herokuapp.com/getNotifsforLeader',{
    method:'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      username: this.props.username
    })
  }).then((res)=>res.json())
    .then(res=>{
      this.setState({grps:res});
      // console.log(res);
    })
    .catch(err=>console.log);
  }
}

	render()
	{
		const {grps}= this.state;
		const filteredGroups = grps;
		return(
			<div class='tc'>
      <br></br>
      <h2 className="tc f2">Your Notifications</h2>

				{
					(()=>{
						
						if(this.state.role==='member')
							return <NotifCardList groups={filteredGroups} />
            else
              if(this.state.role==='leader')
                return <LeaderCardList groups={filteredGroups} />
					})()
				}
			</div>
		);
	}
}
export default Notifications;