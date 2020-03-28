import React from 'react';
import { Form }from 'react-bootstrap';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import './dashboard.css';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Notifications from '../Notifications/Notifications';
import Groups from '../Groups/Groups';
import Users from '../Users/Users';

var name=" ";

class Dashboard extends React.Component{

	componentDidMount()
	{
		name=this.props.username;
		console.log('Dashboard mein, username is',name);
	}
	render()
	{
		return(
			<Router>

			  <nav className="navbar navbar-dark navito">
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <a class="navbar-brand" href="#">
				    <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="mdb logo" />
				  </a>
			    <Form inline>
			    <label className="ptr db fw6 lh-copy white f3 navito b--transparent justify-content-end">{this.props.username}</label>
			    <button className="ptr db fw6 lh-copy white f3 navito b--transparent ">Logout</button>
			  	</Form>
			  </nav>
			<div className="pos-f-t">
			  <div className="collapse" id="navbarToggleExternalContent">
			    <div className=" p-4 navito">
				    <Link to="/dashboard" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">Home   </button>
				    </Link> 
				    <br></br>
				    <Link to="/layout" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">Layout </button>
				    </Link>
				    <br></br>
				    <Link to="/notifications" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">Notifications<span class="badge badge-pill badge-dark">6</span> </button>
				    </Link>
				    <br></br>
				    <Link to="/groups" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">Groups   </button>
				    </Link>
				    <br></br>
				    <Link to="/users" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">View Users   </button>
				    </Link>
			    </div>
			  </div>
			  	<Switch>
				  	<Route path="/layout" exact component={Layout}/>
				  	<Route path="/notifications" exact render={(props) => <Notifications {...props} username={this.props.username} />} />
				  	<Route path="/dashboard" render={(props) => <Home {...props} username={this.props.username} />} />
				  	<Route path="/groups" component={Groups}/>
				  	<Route path="/users" render={(props) => <Users {...props} username={this.props.username} />} />
			  	</Switch>

			</div>
			</Router>
			);
	}
}

export default Dashboard
