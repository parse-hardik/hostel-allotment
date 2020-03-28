import React from 'react';
import './card.css';
import { Button } from 'react-bootstrap';

const Card =(props) => {
	return(
		<div className="dib br3 pa3 ma2 bw2 cardbg ">
			<div>
			 <img alt = "This a photu!" src = {`https://robohash.org/${props.name}?200x200`} />
			</div>
			<div>
			<h2>{props.name}</h2>
			</div>		
		 	{
		 		props.superUser[0].leader ?
		 			props.user.member ?
				 		<div className='btn'>
			    	<Button variant="dark " onClick={props.sendReq(props.username)}>Send Request</Button>
			    	</div>	
		    	: console.log('hi')
		    :
		    props.superUser[0].member ?
		    	props.user.leader ?	
			    	<div className='btn'>
			    	<Button variant="dark " onClick={props.sendReq(props.username)}>Send Request</Button>
			    	</div>	
		    	: console.log('hi')
		    : console.log('hi')	
	    }
		</div>	
	);
}

export default Card;
