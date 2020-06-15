import React from 'react';
import './Profile.css';
const Profile=(props)=>{
	
		return(
			<div className="">
			<br></br>			
			<div className="container ">
				  <div className="img-container">
				    <img src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt=""/>
				  </div>
				  <ul className="social-media">
							<li><a href="#"><i className="fa fa-key"></i></a></li>
							<li><a href="#"><i className="fa fa-envelope"></i></a></li>
							<li><a href="#"><i className="fa fa-camera "></i></a></li>
				</ul>
				<div className="user-info">
					<p className="">{props.username}</p>
		      		<p className="">{props.role}</p> 
				</div>
			</div>
		</div>
		);
	}


export default Profile;