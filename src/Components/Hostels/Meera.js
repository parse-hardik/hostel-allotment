import React, {Component} from 'react';
import '../Layout/Layout.css';
import './Meera.css';
import axios from 'axios';
import Dialog from 'react-bootstrap-dialog';

class Meera extends Component{
	constructor()
	{
		super()
		this.selectWing = this.selectWing.bind(this)
		this.state={
			wings:[],
			f1w1:"free",
			f1w2:"free",
			f1w3:"free",
			f1w4:"free",
			f1w5:"free",
			f1w6:"free",
			f1w7:"free",
			f1w8:"free",
			f2w1:"free",
			f2w2:"free",
			f2w3:"free",
			f2w4:"free",
			f2w5:"free",
			f2w6:"free",
			f2w7:"free",
			f2w8:"free"

		}
	}

	componentDidMount(){
		axios.get('https://hostelserver.herokuapp.com/getWing')
	 	.then(response => {
			 this.setState({
				f1w1:"free",
				f1w2:"free",
				f1w3:"free",
				f1w4:"free",
				f1w5:"free",
				f1w6:"free",
				f1w7:"free",
				f1w8:"free",
				f2w1:"free",
				f2w2:"free",
				f2w3:"free",
				f2w4:"free",
				f2w5:"free",
				f2w6:"free",
				f2w7:"free",
				f2w8:"free"
			 },()=>{
	 		this.state.wings=response.data.filter(wing=>{
	 			if(wing.bhawan===this.props.Bhawan)
	 			{
	 				if(wing.floor==='1' && wing.status!=="free")
	 				{

						if(wing.wingNo==='1')
							this.setState({
								f1w1:"blocked"
								});
						if(wing.wingNo==='2')
							this.setState({
								f1w2:"blocked"
								});
						if(wing.wingNo==='3')
							this.setState({
								f1w3:"blocked"
								});
						if(wing.wingNo==='4')
							this.setState({
								f1w4:"blocked"
								});
						if(wing.wingNo==='5')
							this.setState({
								f1w5:"blocked"
								});
						if(wing.wingNo==='6')
							this.setState({
								f1w6:"blocked"
								});
						if(wing.wingNo==='7')
							this.setState({
								f1w7:"blocked"
								});
						if(wing.wingNo==='8')
							this.setState({
								f1w8:"blocked"
								});
	 				}
	 				else if(wing.floor==='2' && wing.status!=="free")
	 				{

	 				  if(wing.wingNo==='1')
					    this.setState({
	 						f2w1:"blocked"
	 						});
					if(wing.wingNo==='2')
						this.setState({
		 					f2w2:"blocked"
		 					});
					if(wing.wingNo==='3')
						this.setState({
	 						f2w3:"blocked"
	 						});
					if(wing.wingNo==='4')
						this.setState({
	 						f2w4:"blocked"
	 					 	});
					if(wing.wingNo==='5')
						this.setState({
	 						f2w5:"blocked"
	 						});
					if(wing.wingNo==='6')
						this.setState({
	 						f2w6:"blocked"
	 						});
					if(wing.wingNo==='7')
						this.setState({
	 						f2w7:"blocked"
	 						});
					if(wing.wingNo==='8')
						this.setState({
	 						f2w8:"blocked"
	 						});
	 					
	 				}
	 			}
	 				
	 		})})
	 	})
	 	.catch(function(err) {
	 		console.log(err);
	 	});
	 }


	 reload = () => {
    //RELOAD COMPONENT
    this.componentDidMount();
		};

	selectWing=(floor,wing,status)=>{
		if(this.props.username==='admin')
		{
			if(status==="free")
			{
				this.dialog.show({
				body:'Are you sure you want to block the wing?',
				actions:[
				   Dialog.CancelAction(),
				   Dialog.OKAction(() => {
  						axios.post('https://hostelserver.herokuapp.com/setBlocked',{ bhawan:this.props.Bhawan,floor:floor,wingNo:wing})
  						.then(res =>{
  							this.reload();
  						})
  					})
				]
			})
			}
			else{
			this.dialog.show({
				body:'Do you want to unblock the wing?',
				actions:[
				   Dialog.CancelAction(),
				   Dialog.OKAction(() => {
  						axios.post('https://hostelserver.herokuapp.com/setFree',{ bhawan:this.props.Bhawan,floor:floor,wingNo:wing})
  						.then(res =>{
  							this.reload();
  						})
  					})
				  ]
				})
			}	
	  	}
		else if(window.localStorage.getItem('role')==='leader' && window.localStorage.getItem('wing')==="null" && window.localStorage.getItem('sprint')=== "Sprint 2")
		{
			axios.post('https://hostelserver.herokuapp.com/setSelected',{ bhawan:this.props.Bhawan,floor:floor,wingNo:wing})
	  			.then(res =>{
	  					//this.reload();
	  				})
			if(status==="free")
			{
				this.dialog.show({
					body:'Are you sure you want to select the wing?',
					actions:[
					   Dialog.CancelAction(() => {
  						axios.post('https://hostelserver.herokuapp.com/setFree',{ bhawan:this.props.Bhawan,floor:floor,wingNo:wing})
  						.then(res =>{
  							this.reload();
  							})
						  }),
						
					   Dialog.OKAction(()=>{
						axios.post('https://hostelserver.herokuapp.com/selectWing',{wing : this.props.Bhawan+"-"+floor+"-"+wing ,user:window.localStorage.username})
						.then(res =>{
							window.localStorage.setItem('wing',this.props.Bhawan+"-"+floor+"-"+wing);
							this.reload();
						});
					   	alert('Wing Selected Successfully');
					   	this.reload();
					   })
					]
				})
				
			}
			else
			{
				this.dialog.show({
					body:'This wing cannot be selected.Select another Wing.',
					actions:[
						Dialog.OKAction(()=>{this.reload();})
					]
				})
			}

		}
		else{
			this.dialog.show({
				body:"You cannot select a wing.",
				actions:[
				   Dialog.OKAction(()=>{
				   })
				]
			})
		}

	}



	render(){
		return(
			<div className="flex-layout-meera">
				<div>
					<h1>Layout Floor 1</h1>
					<a className="button btn disabled m-0 washroom" href="#"></a>
					<button name="meera floor1 wing 1"  className={"btn space m-0 wingleft "+(this.state.f1w1 !='free'?'disabled bg':'grow')}   onClick= {()=>this.selectWing('1','1',this.state.f1w1)}>1</button>
					<button name="meera floor1 wing 2"  className={"btn space m-0 wingright "+(this.state.f1w2 !='free'?'disabled bg':'grow')}  onClick= {()=>this.selectWing('1','2',this.state.f1w2)}>2</button>
					<a className="button btn disabled m-0 washroom" href="#"></a>
					<br></br>
					<button  name="meera floor1 wing 8" className={"btn space m-0 wingsidebottom "+(this.state.f1w8 !='free'?'disabled bg':'grow')}  onClick= {()=>this.selectWing('1','8',this.state.f1w8)}>8</button>
					<a className="button btn disabled m-0 qt" href="#"></a>
					<button name="meera floor1 wing 3" type="button" className={"btn space m-0 wingsidetop "+(this.state.f1w3 !='free'?'disabled bg':'grow')}  onClick= {()=>this.selectWing('1','3',this.state.f1w3)}>3</button>
					<br></br>
					<button name="meera floor1 wing 7" type="button" className={"btn space m-0 wingsidetop "+(this.state.f1w7 !='free'?'disabled bg':'grow')} onClick= {()=>this.selectWing('1','7',this.state.f1w7)}>7</button>
					<a className="button btn disabled m-0 qt" href="#"></a>
					<button name="meera floor1 wing 4" type="button" className={"btn space m-0 wingsidebottom "+(this.state.f1w4 !='free'?'disabled bg':'grow')}  onClick= {()=>this.selectWing('1','4',this.state.f1w4)}>4</button>
					<br></br>
					<a className="button btn disabled m-0 washroom" href="#"></a>
					<button name="meera floor1 wing 5" type="button" className={"btn space m-0 wingright "+(this.state.f1w5 !='free'?'disabled bg':'grow')}  onClick= {()=>this.selectWing('1','5',this.state.f1w5)}>5</button>
					<button name="meera floor1 wing 6" type="button" className={"btn space m-0 wingleft "+(this.state.f1w6 !='free'?'disabled bg':'grow')}  onClick= {()=>this.selectWing('1','6',this.state.f1w6)}>6</button>
					<a className="button btn disabled washroom m-0" href="#"></a>
					<Dialog ref={(component) => { this.dialog = component }} />
					<br></br>
					<br></br>	
				</div>
				<div>
					<h1>Layout Floor 2</h1>
					<a className="button btn disabled m-0 washroom" href="#"></a>
					<button name="meera floor1 wing 1"  className={"btn space m-0 wingleft "+(this.state.f2w1 !='free'?'disabled bg':'grow')}  onClick= {()=>this.selectWing('2','1',this.state.f2w1)}>1</button>
					<button name="meera floor1 wing 2" className={"btn space m-0 wingright "+(this.state.f2w2 !='free'?'disabled bg':'grow')} onClick= {()=>this.selectWing('2','2',this.state.f2w2)}>2</button>
					<a className="button btn disabled m-0 washroom" href="#"></a>
					<br></br>
					<button  name="meera floor1 wing 8" className={"btn space m-0 wingsidebottom "+(this.state.f2w8 !='free'?'disabled bg':'grow')} onClick= {()=>this.selectWing('2','8',this.state.f2w8)}>8</button>
					<a className="button btn disabled m-0 qt" href="#"></a>
					<button name="meera floor1 wing 3" type="button" className={"btn space m-0 wingsidetop "+(this.state.f2w3 !='free'?'disabled bg':'grow')} onClick= {()=>this.selectWing('2','3',this.state.f2w3)}>3</button>
					<br></br>
					<button name="meera floor1 wing 7" type="button" className={"btn space m-0 wingsidetop "+(this.state.f2w7 !='free'?'disabled bg':'grow')} onClick= {()=>this.selectWing('2','7',this.state.f2w7)}>7</button>
					<a className="button btn disabled m-0 qt" href="#"></a>
					<button name="meera floor1 wing 4" type="button" className={"btn space m-0 wingsidebottom "+(this.state.f2w4 !='free'?'disabled bg':'grow')} onClick= {()=>this.selectWing('2','4',this.state.f2w4)}>4</button>
					<br></br>
					<a className="button btn disabled m-0 washroom" href="#"></a>
					<button name="meera floor1 wing 5" type="button" className={"btn space m-0 wingright "+(this.state.f2w5 !='free'?'disabled bg':'grow')} onClick= {()=>this.selectWing('2','5',this.state.f2w5)}>5</button>
					<button name="meera floor1 wing 6" type="button" className={"btn space m-0 wingleft "+(this.state.f2w6 !='free'?'disabled bg':'grow')} onClick= {()=>this.selectWing('2','6',this.state.f2w6)}>6</button>
					<a className="button btn disabled washroom m-0" href="#"></a>
					<Dialog ref={(component) => { this.dialog = component }} />
					<br></br>
					<br></br>
			</div>
		</div>
		);
	}
}
export default Meera;