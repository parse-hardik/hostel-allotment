import React, { Component } from 'react';
import CardList from './CardList';
// import { groups } from '../Data/GroupList';
import SearchBox from '../SearchBox';
import axios from 'axios';

class Group extends Component{
	constructor()
	{
		super();
		this.state ={
			searchField:'',
			users:[],
			superUser:{}
		}
	}

	 sendReq=(event,to)=>{
	 	// console.log('username is',username);
 		/*if(this.state.superUser.leader===true)
 			{
 				fetch('http://localhost:5000/createNotif',{
		      method:'post',
		      headers: {'Content-Type':'application/json'},
		      body: JSON.stringify({
		        toUsername:to,
		        fromGname:this.state.superUser.username
		      })
		    }).then(res=>res.json())
		      .then((res)=>{
		      	alert('Your req has been sent to ' + to + '!')
		      })
		      .catch(err=>console.log);
 			}
 			else
 				if(this.state.superUser.member===true)
 				{
 					fetch('http://localhost:5000/createNotif',{
			      method:'post',
			      headers: {'Content-Type':'application/json'},
			      body: JSON.stringify({
			        fromUsername:this.state.superUser.username,
			        toGname:to
			      })
			    }).then(res=>res.json())
			      .then((res)=>{
			      	alert('Your req has been sent to ' + to + '!')
			      })
			      .catch(err=>console.log);
 				}
 				else
 					alert('Please choose a Role First,Navigate to Home tab')*/
 				console.log(this.state.superUser);
 		}
 	

	 componentDidMount(){
		
	 	axios.get('http://localhost:5000/getUsers')
	 	.then(response => {
	 		this.setState({users : response.data});
	 	})
	 	.catch(function(err) {
	 		console.log(err);
	 	});

	 	fetch('http://localhost:5000/getOneUser',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: this.props.username
      })
    }).then((res)=>res.json())
      .then(res=>{
        this.setState({superUser:res})
        console.log(this.state.superUser)
      })
      .catch(err=>console.log);
	 }

	onSearchChange = (event) =>{
		this.setState({ searchField: event.target.value});
	}

	render(){
			const {users,searchField}= this.state;
			const filteredUsers = users.filter(users =>{
			return users.name.toLowerCase().includes(searchField.toLowerCase());
			});
			return(
				<div className='tc'>
					<h1 className={`f1 tc`}>Users</h1>
					<span class="glyphicon glyphicon-name"></span><SearchBox searchChange={ this.onSearchChange }/>
					<CardList users = { filteredUsers } sendReq={this.sendReq} superUser={this.state.superUser}/>
				</div>
		);
	}
}

export default Group;