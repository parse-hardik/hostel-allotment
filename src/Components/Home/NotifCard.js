import React from 'react';
import './notifcard.css';

const NotifCard =({ fromgname,tousername }) => {

var str = new String(fromgname.toString());
// fromgname=fromgname.toString();
console.log(str);

	return(
<div class="card weather-card cardbg">
  <div class="card-body pb-3">
    <h6 class="card-title font-weight-bold f1">Notification from {str}</h6>
    <div class="collapse-content">
      <div class="collapse" id={str}>
      	<h4>hi</h4>
      </div>
      <hr class="" />
       <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 deep-purple-text collapsed f1 tc" data-toggle="collapse" href={"#"+str} aria-expanded="false" aria-controls={str}>Click to view</a>
    </div>
  	</div>
</div>
	);
}

// NotifCard.prototype.toString = function() { 
//   return ''+this.name;
// }

export default NotifCard;