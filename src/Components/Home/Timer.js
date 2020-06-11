import React, { Component } from 'react';
import axios from 'axios';

export default class Timer extends Component {
	constructor() {
		super();
		this.state = {
			hour: '00',
			sec: '00',
			min: '',
		}
		this.secondsRemaining = ''; 
		this.intervalHandle = '';
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:5000/timer/5edf6769c0264e6ed03657e9')
			.then(res => {
				console.log(res.data);
				var countdown = new Date(res.data.countdown);
				// var date = countdown.getDate();
				var hour = countdown.getHours();
				var min = countdown.getMinutes();
				var sec = countdown.getSeconds();
				var nowhour = new Date().getHours();
				var nowmin = new Date().getMinutes();
				var nowsec = new Date().getSeconds();
				if(sec>nowsec)
					var setsec = sec-nowsec;
				else
					var setsec = 60-nowsec+sec;
				if(min>nowmin)
					var setmin = min-nowmin;
				else	
					var setmin = 60-nowmin+min;				
				this.setState({
					sec: setsec,
					min: setmin,
					hour: hour-nowhour,
				})
				this.secondsRemaining = this.state.min * 60;
				this.intervalHandle = setInterval(this.tick, 1000);
			})
	}

	tick=()=>{
		var min = Math.floor(this.secondsRemaining / 60);
		var sec = this.secondsRemaining - (min * 60);
		this.setState({
			min: min,
			sec: sec
		})
		if (sec < 10) {
			this.setState({
				sec: "0" + this.state.seconds,
			})
		}
		if (min < 10) {
		this.setState({
			min: "0" + min,
		})
		}
		if (min === 0 & sec === 0) {
		clearInterval(this.intervalHandle);
		}
		this.secondsRemaining--
	}

	render() {
		return (
			<div>
				<center>
				<h2>min:{this.state.min} sec: {this.state.sec}</h2>
				{
					(()=>{
						console.log('min',this.state.min);
						console.log('sec',this.state.sec);
					})()
				}
				</center>
			</div>
		);
	}
}

