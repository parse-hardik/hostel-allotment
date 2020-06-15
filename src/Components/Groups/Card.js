import React ,{Component} from 'react';
import './card.css';
import { Button } from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import axios from 'axios';

class Card extends Component{

	constructor(props)
	{
		super(props);
	}
   
    alreadymem=()=>{
		if(window.localStorage.getItem('sprint')==='Sprint 1')
		{
			this.dialog.show({
				body: 'Hey! You are already in a group',
				actions:[
					Dialog.OKAction()
				]
			})
		}
		else{
			this.dialog.show({
				body: 'You cannot send a request in the current Sprint',
				actions:[
					Dialog.OKAction(),
				]
			})
		}

    }

    sendreq=()=>{
		if(window.localStorage.getItem('sprint')==='Sprint 1')
		{
    	this.dialog.show({
    		body: 'Are you sure you want to send request to this group',
    		actions:[
    		    Dialog.CancelAction(),
    		    Dialog.OKAction(()=>{
    		    	axios.post('http://localhost:5000/createNotif',{fromUsername:this.props.user,toGname:this.props.name})
    		    	.then(alert('Your req has been sent!'))
    		    })
    		]
		})
		}
		else{
			this.dialog.show({
				body: 'You cannot send a request in the current Sprint',
				actions:[
					Dialog.OKAction(),
				]
			})
		}
    }
    

	render(){
		return(
			<div className="dib br3 pa3 ma2  bw2  flip-card cardbg ">
			   <div className="flip-card-inner">
						<div className="  flip-card-front ">
							<div>
							 <img alt = "This a photu!" src = {`https://robohash.org/${this.props.name}?200x200`} />
							</div>
							<div>
								<h2>{this.props.name}</h2>
							</div>				
						</div>
					

			        <div className=" flip-card-back">
			        <div>
			         <h1 className="tc ">Members</h1>
			        {
			        	this.props.member.map((user,i)=>(
			        		<h3 className=" pl5 tl"> {user.name} </h3>
			        	))
			        }
			        </div>
			        <div className='btn'>
			        <Button variant="dark " onClick={this.props.usergrp==="null"? ()=>this.sendreq():()=>this.alreadymem() }>Join Group</Button>
			        </div>
			        </div>
			        <Dialog ref={(component)=>{this.dialog = component}}/>
				</div>	
				
			</div>
		);
	}
}

export default Card;
