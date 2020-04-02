import React from 'react';
import './LeaderCard.css';

class LeaderCard extends React.Component{

  constructor(){
    super();
    this.state={
      fromusername:'',
      togname:'',
      status:'',
    }
  }
  componentDidMount()
  {
    this.state.fromusername=this.props.fromusername;
    this.state.togname=this.props.togname;
  }
  changetoAccept=(event)=>{
    this.state.status='accept';

    fetch('http://localhost:5000/notifsReq',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        fromUsername: this.state.fromusername,
        toGname: this.state.toGname,
        accept: true,
      })
    })
    .then((res)=>res.json())
      .then((res)=>{
        if(res.name!==undefined){
        }
        else
          alert('Incorrect combination');
        // console.log(res);
      }).catch((err)=>console.log(err));

  }
  changetoReject=(event)=>{
     this.state.status='reject';

    fetch('http://localhost:5000/notifsReq',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        fromUsername: this.state.fromusername,
        toGname: this.state.toGname,
        accept: false,
      })
    })
    .then((res)=>res.json())
      .then((res)=>{
        if(res.name!==undefined){
        }
        else
          alert('Incorrect combination');
      }).catch((err)=>console.log(err));
    
  }
  render(){
    return(
    <div className="dib ">
       <div className="dib br3 pa3 ma1 bw2 w-45 card shadow-3 bg2">
          <div className=" card-front dib">        
           
              <h3 className="f3"> {this.state.fromusername} wants to join your group.</h3>
              <button onClick={this.changetoAccept} type="button" className="btn btn-success grow">Accept</button>
              <button onClick={this.changetoReject} type="button" className="btn btn-danger grow">Reject</button>  
          </div>           
      </div> 
    
    </div>
  );

 } 
  
}


export default LeaderCard;