import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import { groups } from '../Data/GroupList';
import SearchBox from '../SearchBox';
import axios from 'axios';

class Group extends Component{
	constructor()
	{
		super();
		this.state ={
			grps:[],
			searchField:'',
			users:[]
		}
	}

	 componentDidMount(){
		axios.get('http://localhost:5000/getGroup')
	 	.then(response => {
	 		this.setState({grps : response.data});
	 		console.log(response.data);
	 	})
	 	.catch(function(err) {
	 		console.log(err);
	 	});
	 	axios.get('http://localhost:5000/getUsers')
	 	.then(response => {
	 		this.setState({users : response.data});
	 		console.log(response.data)
	 	})
	 	.catch(function(err) {
	 		console.log(err);
	 	});

	 	 const script = document.createElement("script");

    script.src = "./index.js";
    script.async = true;

    document.body.appendChild(script);

	 }

	onSearchChange = (event) =>{
		this.setState({ searchField: event.target.value});
	}

	render(){
			const {grps,searchField}= this.state;
			const filteredGroups = grps.filter(groups =>{
			return groups.gname.toLowerCase().includes(searchField.toLowerCase());
			});
			return(
				<div className='tc'>
				<h1 className={`f1 tc`}>Groups</h1>
				<span class="glyphicon glyphicon-name"></span><SearchBox searchChange={ this.onSearchChange }/>
				<CardList groups = { filteredGroups } 
						  members ={this.state.users}
						 />
				</div>
		);
	}
}

export default Group;