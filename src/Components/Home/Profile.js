import React from 'react';
import './Profile.css';
const Profile=(props)=>{
	
		return(
			<div className="">
			<br></br>			
			<div class="container ">
				  <div class="img-container">
				    <img src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt=""/>
				  </div>
				  <ul class="social-media">
							<li><a href="#"><img src="https://img.favpng.com/12/7/24/camera-computer-icons-photography-clip-art-png-favpng-h9NT6hWXTrMZXnnmsUNXr2T0T.jpg" class="imagesize img " /><i className="fa "></i></a></li>
							<li><a href="#"><img src="https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-02-512.png" class="imagesize img" /><i className="fa "></i></a></li>
							<li><a href="#"><img src="https://i.ya-webdesign.com/images/how-to-change-png-to-icon-format-4.png" class="imagesize img" /><i className="fa "></i></a></li>
				</ul>
				<div class="user-info">
					<span className="f3">{props.username}</span>
					<br></br>
		      		<span className="f4">{props.role}</span> 
		      		

				</div>
			</div>
		</div>
		);
	}


export default Profile;