import React from 'react';
import './Landing.css';
//import Routes from'./../../Routes.js';
import history from './../../history.js';
function Landing(){

  
    return(
      
      <div className="landing-page">
        
          <div className="bg-image">
            <div className="heading">
                <span className="sub1">
                Find The Wing You Want
                </span>
                <a href ="" className="sub " onClick={() => history.push('/Sigin')}>
                    Get Started
                </a>  
                
            </div>
            <div className="sub-heading">
                5 simple steps:
            </div>
            <div class="slider">
  
  

  <div class="slides">
    <div id="slide-1">
      <div>
          Choose to be a member of a group or the leader.
      </div>
    </div>
    <div id="slide-2">
    <div>
        As a member, you can send out requests to group leaders. Get accepted into their groups!
        As a leader, you can send out requests to meembers to join group.
    </div>
    </div>
    <div id="slide-3">
       Find your future wingmates:)
    </div>
    <div id="slide-4">
       Choose the wing u want.
    </div>
    <div id="slide-5">
      PS . Rememebr to watch the timer.
    </div>
    
  </div>
  <a href="#slide-1">I</a>
  <a href="#slide-2">II</a>
  <a href="#slide-3">III</a>
  <a href="#slide-4">IV</a>
  <a href="#slide-5">V</a>
</div>
       </div>  
      </div>
    );
  }
  export default Landing;