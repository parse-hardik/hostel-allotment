import React from 'react';
import './notifcard.css';

class NotifCard extends React.Component{

  constructor(){
    super();
    this.state={
      fromgname:'',
      tousername:'',
      status:'',
      colour:'',
    }
  }
  
  changetoAccept=(event)=>{
    this.setState({status:"accept"})

    fetch('https://hostelserver.herokuapp.com/notifsReq',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        fromGname: this.state.fromgname,
        toUsername: this.state.tousername,
        accept: true,
      })
    })
    .then((res)=>res.json())
      .then((res)=>{
        if(res.name!==undefined){
          alert('Req Accepted!!')
          this.setState({colour:"#00ff00"})
        }
        else
          alert('Incorrect combination');
        // console.log(res);
      }).catch((err)=>console.log(err));

  }
  changetoReject=(event)=>{
     // this.state.status='reject';
     this.setState({status:"reject"})
    fetch('https://hostelserver.herokuapp.com/notifsReq',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        fromGname: this.state.fromgname,
        toUsername: this.state.tousername,
        accept: false,
      })
    })
    .then((res)=>res.json())
      .then((res)=>{
        if(res.colour!==undefined){
          alert('req rejected')
          this.setState({colour:res.colour})
        }
        else
          alert('ffv');
      }).catch((err)=>console.log(err));
    
  }

componentDidMount()
  {
    // this.state.fromusername=this.props.fromusername;
    this.setState({fromgname:this.props.fromgname})
    this.setState({tousername:this.props.tousername})
    this.setState({colour:this.props.colour})
    // this.state.togname=this.props.togname;
  }

  render(){
    const clr = this.state.colour
    return(
    <div className="dib ">
       <div style={{backgroundColor:clr}} className="dib br3 pa3 ma1 bw2 w-45 card shadow-3 bg2" >
          <div className=" card-front dib">        
           
              <h3 className="f3"> {this.state.fromgname} wants to invite you to their group.</h3>
             { window.localStorage.getItem('group')==="null" && window.localStorage.getItem('sprint')==='Sprint 1' ? 
              <div>
              <button onClick={this.changetoAccept} type="button" className="btn btn-success grow" >Accept</button>
              <button onClick={this.changetoReject} type="button" className="btn btn-danger grow" >Reject</button>  
              </div>
              :<div></div>
    }
          </div>           
      </div> 
    </div>
  );

 } 
  
}

export default NotifCard;