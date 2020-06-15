import React, {Component} from 'react';
import Slide from './Slide';
import './Layout.css';
class Layout extends Component{
	render(){
		return(
		
			<div>
				<div>
					<center>
						
						{
							window.localStorage.getItem('role')==='leader' && window.localStorage.getItem('wing')!=="null" ?
							<h2>Your allotted wing is {window.localStorage.getItem('wing')}</h2>
							:
							<div></div>
						}
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