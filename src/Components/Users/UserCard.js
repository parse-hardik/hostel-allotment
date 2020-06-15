import React ,{Component} from 'react';
import './UserCard.css';
import axios from 'axios';
import Dialog from 'react-bootstrap-dialog';
import { AvatarGenerator } from 'random-avatar-generator';
const generator = new AvatarGenerator();
class UserCard extends Component{
	constructor(props){
		super(props);
		this.sendMemRequest = this.sendMemRequest.bind(this);
		this.state={
			users:[]
		  }
	}
	componentDidMount(){	
			
		fetch('https://hostelserver.herokuapp.com/getUsers',{
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
	//console.log('checking');
	let noOfMembers=0;
		this.state.users.forEach(user=>{
			//console.log(user);
			if(user.gname===leaderName)
			{
				noOfMembers++;
				//console.log(noOfMembers);
			}
			
		})
		if(noOfMembers<5)
			return true;
		else
		{
			//console.log('reutning false');
			return false;
		}

}
sendMemRequest=()=>{
	if(window.localStorage.getItem('sprint')==='Sprint 1')
	{
		if( this.checkIfCanSend(this.props.superUser.username)===true)
		{
			this.dialog.show({
				body:'Do you want to send request to this member?',
				actions:[
				Dialog.CancelAction(),
				Dialog.OKAction(() => {
						axios.post('https://hostelserver.herokuapp.com/createNotif',{fromGname:this.props.superUser.username ,toUsername:this.props.user.username})
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
	else{
		this.dialog.show({
			body: 'You cannot send a request in the current Sprint',
			actions:[
				Dialog.OKAction(),
			]
		})
	}
	
}
sendLeaderRequest=()=>{
	if(window.localStorage.getItem('sprint')==='Sprint 1')
	{
	this.dialog.show({
				body:'You cant send request because this person is not a member',
				actions:[
				   Dialog.CancelAction(),
				  
				]
			})
	}
	else{
		this.dialog.show({
			body: 'You cannot send a request in the current Sprint',
			actions:[
				Dialog.OKAction(),
			]
		})
	}
	
}


render(){
	return(
		
	<div class="mr4 ml4">	
	<div class="chip">	
	<img src={generator.generateRandomAvatar()} alt="Person" width="96" height="96"></img>
	<div className="">
	<div className="text-user name-user">{this.props.name}</div>	
	<div className="text-user type-user">{this.props.user.leader ? 'Leader' : this.props.user.member ? 'Member' : ' '}</div>
	<button className="text-user req-user" onClick={this.props.superUser.leader ? this.props.user.member ? ()=>this.sendMemRequest(): ()=>this.sendLeaderRequest(): console.log('hi') }>
	Send Request</button>	
	</div>
	</div>
	<Dialog ref={(component) => { this.dialog = component }} />
	
	</div>

	);
}
}

export default UserCard;
