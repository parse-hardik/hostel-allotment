import React, { Component } from 'react';
import axios from 'axios';
import './Timer.css';
export default class Timer extends Component {
	constructor()
	  {
	    super();
	    this.state={
		  days:'',
		  hours:'',
		  minutes:'',
		  seconds:'',
		}
	  }


	componentDidMount() {
		axios.get('http://localhost:5000/timer/5edf6769c0264e6ed03657e9')
			.then(res => {
				window.localStorage.setItem('sprint',res.data.for)
				//console.log(res.data);
				 var countdown = new Date(res.data.countdown);
				// console.log(countdown);			
				const second = 1000,
				minute = second * 60,
				hour = minute * 60,
				day = hour * 24;		  
				  let countDown = new Date(countdown).getTime();//this is where u input the date
				 // console.log(countDown);
			  	setInterval(function() { 		  
				let now = new Date().getTime(),
					distance = countDown - now;		
				let td=  Math.floor(distance / (day)), th=Math.floor((distance % (day)) / (hour)),tm=Math.floor((distance % (hour)) / (minute)),ts=Math.floor((distance % (minute)) / second);
				
				
					//console.log('in the function');
					//console.log('hi',td,th,tm,ts);
					this.setState({days: td,hours:th,minutes:tm,seconds:ts});
				
			  }.bind(this), second)			
			 })
	}
	
	render() {
		return (
			<div>
				<div class="container-timer">
		<h1 className="timer-heading">Countdown to end of {window.localStorage.getItem('sprint')}</h1>
				<ul className="unordered-list">
					<li className="list-item"><span id="days">{this.state.days}</span>Days</li>
					<li className="list-item"><span id="hours">{this.state.hours}</span>Hours</li>
					<li className="list-item"><span id="minutes">{this.state.minutes}</span>Minutes</li>
					<li className="list-item"><span id="seconds">{this.state.seconds}</span>Seconds</li>
					
				</ul>
				</div>
			</div>
		);
	}
}

