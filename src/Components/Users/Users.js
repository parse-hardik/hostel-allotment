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
        // console.log(this.state.superUser)
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