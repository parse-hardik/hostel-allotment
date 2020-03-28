import React from 'react';
import './card.css';
import { Button } from 'react-bootstrap';
const Card =(props) => {
	
	return(
		<div className="dib br3 pa3 ma2  bw2  flip-card cardbg ">
		   <div className="flip-card-inner">
					<div className="  flip-card-front ">
						<div>
						 <img alt = "This a photu!" src = {`https://robohash.org/${props.name}?200x200`} />
						</div>
						<div>
							<h2>{props.name}</h2>
						</div>				
					</div>
				

		        <div className=" flip-card-back">
		        <div>
		         <h1 className="tc ">Members</h1>
		        {
		        	props.member.map((user,i)=>(
		        		<h3 className=" pl5 tl"> {user.name} </h3>
		        	))
		        }
		        </div>
		        <div className='btn'>
		        <Button variant="dark ">Join Group</Button>
		        </div>
		        </div>
			</div>	
		</div>
	);
}

export default Card;
