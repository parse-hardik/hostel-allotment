import React from 'react';
import './notifcard.css';

const NotifCard =({ fromgname,tousername }) => {

var str = new String(fromgname.toString());
// fromgname=fromgname.toString();
console.log(str);

	return(
    <div className="dib ">
       <div className="dib br3 pa3 ma1 bw2 w-45 card shadow-3 bg2">
          <div className=" card-front dib">        
           
              <h3 className="f3"> {str} wants to you to join their group.</h3>
              <button type="button" class="btn btn-success grow">Accept</button>
              <button type="button" class="btn btn-danger grow">Reject</button>  
          </div>           
      </div>     
    </div>
    );
}

// NotifCard.prototype.toString = function() { 
//   return ''+this.name;
// }

export default NotifCard;