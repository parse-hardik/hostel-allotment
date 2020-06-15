import React, {Component} from 'react';
import './Layout.css';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import Meera from '../Hostels/Meera';
import MeeraB from './Bhavans/MeeraB.png';
import Gandhi from './Bhavans/Gandhi.png';
import Gautam from './Bhavans/Gautam.png';
import Krishna from './Bhavans/Krishna.png';
import Malviya from './Bhavans/Malviya.png';
import Shankar from './Bhavans/Shankar.png';
import Valmiki from './Bhavans/Valmiki.png';
import VK from './Bhavans/VK.png';
import Vyas from './Bhavans/Vyas.png';

class Slide extends Component{
	
	render(){
		return(
			<Router>
				<center>
				<div className="bd-example">
			  <div id="carouselExampleCaptions" className="carousel slide w-50" data-ride="carousel">
				    <ol className="carousel-indicators">
				      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
				    </ol>
			    <div className="carousel-inner ">
				      <div className="carousel-item active">
				       <Link to="/meera" >
				        <img src={MeeraB} className="d-block ht w-100" />
				       </Link> 
				        <div className="carousel-caption d-none d-md-block">
				          <h5 >Meera Bhawan</h5>		         
				        </div>
				      </div>
				      <div className="carousel-item">
				      <Link to="/Vyas" >		      
				        <img src={Vyas} className="d-block ht w-100" alt="..."/>
				      </Link>
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Vyas Bhavan</h5>
				        </div>
				      </div>
				      <div className="carousel-item">
				      <Link to='/Gautam'>
				        <img src={Gautam} className="d-block ht w-100" alt="..."/> 
				      </Link>
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Gautam Bhavan</h5>		         
				        </div>
				      </div>
				      <div className="carousel-item">
				      <Link to='/Gandhi'>
				        <img src={Gandhi} className="d-block ht w-100" alt="..."/>
				      </Link>
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Gandhi Bhavan</h5>		  
				        </div>
				      </div>
				      <div className="carousel-item">
				      <Link to='/Shankar'>
				        <img src={Shankar} className="d-block ht w-100" alt="..."/>
				      </Link>
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Shankar Bhavan</h5>		  
				        </div>
				      </div>
				      <div className="carousel-item">
				      <Link to='/Krishna'>
				        <img src={Krishna} className="d-block ht w-100" alt="..."/>
				      </Link>
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Krishna Bhavan</h5>		  
				        </div>
				      </div>
				      <div className="carousel-item">
				      <Link to='/Valmiki'>
				        <img src={Valmiki} className="d-block ht w-100" alt="..."/>
				      </Link>
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Valmiki Bhavan</h5>		  
				        </div>
				      </div>
				       <div className="carousel-item">
				       <Link to='/Malviya'>
				        <img src={Malviya} className="d-block ht w-100" alt="..."/>
				      </Link>
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Malaviya Bhavan</h5>		  
				        </div>
				      </div>
				       <div className="carousel-item">
				       <Link to='/VK'>
				        <img src={VK} className="d-block ht w-100" alt="..."/>
				      </Link>
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Vishwakarma Bhavan</h5>		  
				        </div>
				      </div>
				    
			    </div>
			    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
			      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			      <span className="sr-only">Previous</span>
			    </a>
			    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
			      <span className="carousel-control-next-icon" aria-hidden="true"></span>
			      <span className="sr-only">Next</span>
			    </a>
			  </div>
			  	<Switch>
						<Route path="/meera" component={(props)=><Meera Bhawan="meera" username= {this.props.username}/>}/>
						<Route path="/Vyas" component={(props)=><Meera Bhawan="vyas" username= {this.props.username}/>}/>
						<Route path="/Gautam" component={(props)=><Meera Bhawan ="gautam" username= {this.props.username}/>}/>
						<Route path="/Gandhi" component={(props)=><Meera Bhawan="gandhi" username= {this.props.username}/>}/>
						<Route path="/Shankar" component={(props)=><Meera Bhawan="shankar" username= {this.props.username} />}/>
						<Route path="/Krishna" component={(props)=><Meera Bhawan="krishna" username= {this.props.username}/>}/>
						<Route path="/Valmiki" component={(props)=><Meera Bhawan="valmiki" username= {this.props.username}/>}/>
						<Route path="/Malviya" component={(props)=><Meera Bhawan="malviya" username= {this.props.username}/>}/>
						<Route path="/VK" component={(props)=><Meera Bhawan="vk"  username= {this.props.username}/>}/>}/>


				</Switch>
			</div>
		</center>		
	</Router>
		);
	}
}

export default Slide;