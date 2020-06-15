import React from 'react';
import {Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Notifications from '../Notifications/Notifications';
import Groups from '../Groups/Groups';
class Layout extends Component{
	render(){
		return(
	<div className="container-fluid">
  <h1>Small Grid</h1>
  
  <div className="row">
    <div className="col-sm-3" style="background-color:yellow;">
    </div>
    <div className="col-sm-9" style="background-color:pink;">
    </div>
  </div>
</div>
);
	}
}
export default Layout;