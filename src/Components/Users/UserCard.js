import React ,{Component} from 'react';
import './UserCard.css';
import axios from 'axios';
import Dialog from 'react-bootstrap-dialog';

class UserCard extends Component{
	constructor(props){
		super(props);
		this.sendMemRequest = this.sendMemRequest.bind(this);
		this.state={
			users:[]
		  }
	}
	componentDidMount(){	
			
		fetch('http://localhost:5000/getUsers',{
		method:'get',
		headers: {'Content-Type':'application/json'}
		})
		.then((res)=>res.json())
		.then(res => {
			this.setState({users : res});
		})
		.catch(function(err) {
			console.log(err);
		});
			
   
	}
checkIfCanSend(leaderName)
{
	console.log('ckecking');
	let noOfMembers=0;
		this.state.users.forEach(user=>{
			console.log(user);
			if(user.gname===leaderName)
			{
				noOfMembers++;
				console.log(noOfMembers);
			}
			
		})
		if(noOfMembers<5)
			return true;
		else
		{
			console.log('reutning false');
			return false;
		}

}
sendMemRequest=()=>{
	if( this.checkIfCanSend(this.props.superUser.username)===true)
	{
		this.dialog.show({
			body:'Do you want to send request to this member?',
			actions:[
			   Dialog.CancelAction(),
			   Dialog.OKAction(() => {
					  axios.post('http://localhost:5000/createNotif',{fromGname:this.props.superUser.username ,toUsername:this.props.user.username})
					  .then(res =>{
						  alert('Your req has been sent to ' + this.props.user.username + '!')
						  console.log(res.data);
					  })
				  })
			]
		})
	}
	else{
		alert('You cannot send anymore requests for ppl to join your grp as u already have 5 ppl');
	}
	
}
sendLeaderRequest=()=>{
	this.dialog.show({
				body:'You cant send request because this person is a leader',
				actions:[
				   Dialog.CancelAction(),
				  
				]
			})
}


render(){
	return(
		
	<div class="mr3">
	<div class="our-team-main">
	
	<div class="team-front">
	<img src={`http://placehold.it/110x110/${this.props.name}00/fff?text=${this.props.name}`} class="img-fluid" />
	
	</div>
	
	<div class="team-back">
	<h4 className="tc blue f1">{this.props.user.leader ? 'Leader' : this.props.user.member ? 'Member' : ' '}</h4>
	<h4 className="tc f2" onClick={this.props.superUser.leader ? this.props.user.member ? ()=>this.sendMemRequest(): ()=>this.sendLeaderRequest(): console.log('hi') }>
	Click Me!</h4>

	
	</div>
	<Dialog ref={(component) => { this.dialog = component }} />
	</div>
	</div>

	);
}
}

export default UserCard;
