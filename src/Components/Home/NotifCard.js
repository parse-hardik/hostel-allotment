import React from 'react';
import './notifcard.css';

const NotifCard =({ fromgname,tousername }) => {

var str = new String(fromgname.toString());
// fromgname=fromgname.toString();
console.log(str);

	return(
<div class="card weather-card custom ma2">
  <div class="card-body pb-3">
    <h4 class="card-title font-weight-bold ">{str}</h4>
    <p class="card-text">I would like you to join my group</p>
    
    <div class="collapse-content">
      <div class="collapse" id={str}>
      	<h1>hi</h1>
      </div>
      <hr class="" />
       <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 deep-purple-text collapsed" data-toggle="collapse" href={"#"+str} aria-expanded="false" aria-controls={str}>Expand</a>
    </div>
  	</div>
</div>
	);
}

// NotifCard.prototype.toString = function() { 
//   return ''+this.name;
// }

export default NotifCard;