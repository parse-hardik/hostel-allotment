import React from 'react';
import './notifcard.css';

const NotifCard =({ fromgname,tousername }) => {

var str = new String(fromgname.toString());
// fromgname=fromgname.toString();
console.log(str);

	return(
<div class="card weather-card cardbg">
  <div class="card-body pb-3">
    <h4 class="card-title font-weight-bold f1">Notification from {str}</h4>
    <p class="card-text">Mon, 12:30 PM, Mostly Sunny</p>
    <div class="d-flex justify-content-between">
      <p class="display-1 degree">23</p>
      <i class="fas fa-sun-o fa-5x pt-3 amber-text"></i>
    </div>
    <div class="d-flex justify-content-between mb-4">
      <p><i class="fas fa-tint fa-lg text-info pr-2"></i>3% Precipitation</p>
      <p><i class="fas fa-leaf fa-lg grey-text pr-2"></i>21 km/h Winds</p>
    </div>
    <div class="collapse-content">
      <div class="collapse" id={str}>
      	<h1>hi</h1>
      </div>
      <hr class="" />
       <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 deep-purple-text collapsed f1 tc" data-toggle="collapse" href={"#"+str} aria-expanded="false" aria-controls={str}>Expand</a>
    </div>
  	</div>
</div>
	);
}

// NotifCard.prototype.toString = function() { 
//   return ''+this.name;
// }

export default NotifCard;