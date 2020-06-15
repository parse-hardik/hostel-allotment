import React, { Component } from 'react';
import UserCardList from './UserCardList';
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

	 componentDidMount()
	 {		
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
	 	axios.post('https://hostelserver.herokuapp.com/getOneUser',{username: this.props.username})
        .then(res=>{
        this.setState({superUser:res.data[0]})
        //  console.log(this.state.superUser)
      	})
        .catch(err=>console.log);
	 }

	onSearchChange = (event) =>{
		this.setState({ searchField: event.target.value});
	}

	render(){
			const {users,searchField}= this.state;

			const filteredUsers = users.filter(user =>{
			return user.name.toLowerCase().includes(searchField.toLowerCase());
			});
			return(
				<div className='tc'>
					<h1 className={`f1 tc`}>Users</h1>
					<span className="glyphicon glyphicon-name"></span><SearchBox searchChange={ this.onSearchChange }/>
					<UserCardList users = { filteredUsers } sendReq={this.sendReq} superUser={this.state.superUser}/>
				</div>
		);
	}
}

export default Group;