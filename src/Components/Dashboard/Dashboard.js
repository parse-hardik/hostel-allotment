import React from 'react';
import { Form }from 'react-bootstrap';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import './dashboard.css';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Notifications from '../Notifications/Notifications';
import Groups from '../Groups/Groups';
import Users from '../Users/Users';
import App from '../../App';
import Admin from '../Admin.js';
import SignIn from'../SignIn.js';
var name=" ";

class Dashboard extends React.Component{

	constructor(){
		super();
		this.state={
			admin: window.localStorage.getItem('isAdmin'),
		}
	}
	
	
	reload = () => {
		//RELOAD COMPONENT
		this.componentDidMount();
	};

	componentDidMount()
	{
		name=this.props.username;
		window.localStorage.setItem('username',this.props.username);
		// console.log('Dashboard mein, username is',name);
		window.addEventListener('storage',e =>{return this.reload} )
	}

	onLogout=(e)=>{
		window.localStorage.setItem('isAdmin',false);
		window.history.pushState(null, document.title, window.location.href);
		window.addEventListener('popstate', function (event){
		window.history.pushState(null, document.title,  window.location.href);
		});
	}
	
	render()
	{
		return(
			<Router>
				{console.log(this.state.admin)}
			  <nav className="navbar navbar-dark navito">
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <a class="navbar-brand">
				    <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="mdb logo" />
				  </a>
			    <Form inline>
			    <label className="ptr db fw6 lh-copy white f3 navito b--transparent justify-content-end mr-5">{this.props.username}</label>
				<button className="ptr db fw6 lh-copy white f3 navito b--transparent " onClick={this.onLogout}><a href='/' className="no-underline">Logout</a></button>
			  	</Form>
			  </nav>
			<div className="pos-f-t">
			  <div className="collapse" id="navbarToggleExternalContent">
			    <div className=" p-4 navito">
				    <Link to="/dashboard" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler mb-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">Home   </button>
				    </Link> 
			
				    <Link to="/layout" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler mb-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">Layout </button>
				    </Link>
				    
				    <Link to="/notifications" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler mb-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style={{display: this.props.username==="admin" ? 'none' : 'block' }}>Notifications </button>
				    </Link>

				    <Link to="/groups" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler mb-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">Groups   </button>
				    </Link>

				    <Link to="/users" >
				      <button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler mb-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style={{display: this.props.username==="admin" ? 'none' : 'block' }}>View Users   </button>
				    </Link>

					<Link to="/admin" >
					<button className="ptr db fw6 lh-copy white f3 navito b--transparent navbar-toggler " data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style={{display: this.props.username==="admin" ? 'block' : 'none' }}>Admin Controls  </button>
					</Link>
			    </div>
			  </div>
			  	<Switch> 
				  	<Route path="/layout" render={(props)=> <Layout {...props} username={this.props.username} />}/>
				  	<Route path="/notifications" exact render={(props) => <Notifications {...props} username={this.props.username} />} />
				  	<Route path="/dashboard" render={(props) => <Home {...props} username={this.props.username} />} />
				  	<Route path="/groups" render={(props) => <Groups {...props} username={this.props.username} />}/>
				  	<Route path="/users" render={(props) => <Users {...props} username={this.props.username} />} />

					  <Route path='/app' exact component={App}/>

					<Route path="/admin" render={(props) => <Admin {...props} username={this.props.username}/>}/>

			  	</Switch>

			</div>
			</Router>
			);
	}
}

export default Dashboard
