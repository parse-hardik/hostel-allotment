import React, {Component} from 'react';
import Slide from './Slide';
import './Layout.css';
class Layout extends Component{
	render(){
		return(
		
			<div>
				<div>
					<center>
						<h2>Your allotted wing is {window.localStorage.getItem('wing')}</h2>
						<h1>Select a Bhavan to see the Layout</h1>
					</center>
				</div>
				<br></br>
				<div>
					<Slide username= {this.props.username}/>
				</div>
			</div>
			
		);
	}
}
export default Layout;