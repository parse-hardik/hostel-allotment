import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import App from './App';
import Landing from './Components/LandingPage/Landing';

export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route path="/Signin" render={() => (<App />)} />
					<Route path="/" exact render={()=>(<Landing/>)} />
				</Switch>
			</Router>
		)
	}
}