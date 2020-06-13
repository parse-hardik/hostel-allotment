import React, { Component } from 'react';
import axios from 'axios';
import './Timer.css';
export default class Timer extends Component {


	componentDidMount() {
		axios.get('http://localhost:5000/timer/5edf6769c0264e6ed03657e9')
			.then(res => {
				console.log(res.data);
				// var countdown = new Date(res.data.countdown);
				// console.log(countdown);			
				const second = 1000,
				minute = second * 60,
				hour = minute * 60,
				day = hour * 24;		  
				  let countDown = new Date('June 13, 2020 13:14:10').getTime();//this is where u input the date
				  console.log(countDown);
			  	let x = setInterval(function() { 		  
				let now = new Date().getTime(),
					distance = countDown - now;		  
					document.getElementById('days').innerText = Math.floor(distance / (day));
				  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
				  document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
				  document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
			  }, second)
				
			 })
	}
	render() {
		return (
			<div>
				<div class="container-timer">
				<h1 className="timer-heading">Countdown to end of Sprint 1/2</h1>
				<ul className="unordered-list">
					<li className="list-item"><span id="days"></span>Seconds</li>
					<li className="list-item"><span id="hours"></span>Seconds</li>
					<li className="list-item"><span id="minutes"></span>Minutes</li>
					<li className="list-item"><span id="seconds"></span>Seconds</li>
					
				</ul>
				</div>
			</div>
		);
	}
}

