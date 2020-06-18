import React,{Component} from 'react';
import Axios from 'axios';
import './Admin.css';
import { Chart } from "react-google-charts";
import DateTimePicker from 'react-datetime-picker';
import Dialog from 'react-bootstrap-dialog';
import HostelStat from './HostelStat.js';
const baroptions = {
    title: 'Categories selected by students',
    chartArea: { width: '50%' },
    hAxis: {
    title: 'Number of students',
    minValue: 0,
    },
    vAxis: {
    title: 'Category selected',
    },
};
  const bardata = [
    ['Type', 'Number'],
    ['Leader',0],
    ['Member', 0],
    ['None',0],
];
// const threedata=
//     [
//         ['Status', 'Number Of Wings'],
//         ['Selected', 0],
//         ['Free', 0],
//         ['Blocked', 0],
//     ];

// const threeoptions={    
//         title: 'Wing distinctions for meera bhawan',
//         is3D: true,
//     };

  const pieoptions = {
    title: 'Student Seggregation',
    pieHole: 0.4,
    
  };
  const piedata = [
    ["Type", "Number"],
    ["Not in any group", 0],
    ["In a group", 0],
  ];
export default class Admin extends Component{
 constructor(){
     super();
     this.state ={
      date: new Date(),
      sprint:"",
      hostel:"",
      selected:0,
      free:0,
      blocked:0
     }
 }

 onChange = date => this.setState({ date:date})

 submit =()=>{
   Axios.post('https://hostelserver.herokuapp.com/timer/5edf6769c0264e6ed03657e9',{setTime :new Date(this.state.date) , sprint:this.state.sprint})
   .then((res)=>
   {
    this.dialog.show({
      body:'Sprint timings updated!',
      actions:[
        Dialog.OKAction(),
      ]
   })
 })
}

 onOptionChange=(e)=>{
    this.setState({sprint : e.target.value});
 }
 onHostelChange=(e)=>{
  this.setState({hostel : e.target.value});
  Axios.get('https://hostelserver.herokuapp.com/getWing')
     .then((res)=>{
         var free =0,blocked=0,selected=0;
         res.data.map((obj,index)=>{
           console.log(obj);
            if(obj.bhawan===this.state.hostel)
            {
                if(obj.status==='selected')
                    selected++;
                else if(obj.status==='free')
                    free++;
                else
                    blocked++;
            }
         })
         console.log(free,selected,blocked);
         this.setState({selected : selected, free:free, blocked:blocked});
        //  threedata[1][1]=selected;
        //  threedata[2][1]=free;
        //  threedata[3][1]=blocked;
     })
  
}

 componentDidMount(){
     Axios.get('https://hostelserver.herokuapp.com/getUsers')
     .then((res)=>{
         var count =0,leader=0,member=0,neither=0;
         res.data.map((obj,index)=>{
            if(obj.gname==='null' && obj.name!=='admin')
              count++;
            if(obj.leader===true)
              leader++;
            else if(obj.member===true )
              member++;
            else
              neither++;
            return count;
         })
         piedata[1][1]=count;
         piedata[2][1]=res.data.length-count;
         bardata[1][1]=leader;
         bardata[2][1]=member;
         bardata[3][1]=neither;
     })

    //  Axios.get('https://hostelserver.herokuapp.com/getWing')
    //  .then((res)=>{
    //      var free =0,blocked=0,selected=0;
    //      res.data.map((obj,index)=>{
    //         if(obj.bhawan==='meera')
    //         {
    //             if(obj.status==='selected')
    //                 selected++;
    //             else if(obj.status==='free')
    //                 free++;
    //             else
    //                 blocked++;
    //         }
    //      })
    //      threedata[1][1]=selected;
    //      threedata[2][1]=free;
    //      threedata[3][1]=blocked;
    //  })
 }
 render(){
     return(
      <div>
          <div className="mt-5 mb-5">
          <center>
          <h2 className="date-time"> Select the day time and Sprint you want to start.</h2>
          <div className="date-time-form">
            <div className="date-time-inputs">
                <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
                className="datepicker"
                />
                <select className="sprint"  onChange={this.onOptionChange} >
                <option defaultValue="NA">Choose...</option>
                <option value="Sprint 1">Sprint 1</option>
                <option value="Sprint 2">Sprint 2</option>
                </select>
            </div>
            <button type="button" class="btn btn-primary" onClick={this.submit}>Submit</button>
           </div>
          </center>
          
          </div>
          <center>
         <h2>Current Statistics</h2>
         </center>
          <div className="statistics mt-5">
               
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={piedata}
                    options={pieoptions}
                    />
              
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={bardata}
                    options={baroptions}
                    />
          <center>
          <h4 className="date-time mt-5 mb-2"> Select the bhavan</h4>
                <select className="sprint" onChange={this.onHostelChange}>
                <option defaultValue="NA">Choose...</option>
                <option value="meera">Meera Bhawan</option>
                <option value="vyas">Vyas Bhawan</option>
                <option value="krishna">Krishna Bhawan</option>
                <option value="malviya">Malaviya Bhawan</option>
                <option value="gautam">Gautam Bhawan</option>
                <option value="shankar">Shankar Bhawan</option>
                <option value="vk">VishwaKarma Bhawan</option>
                <option value="gandhi">Gandhi Bhawan</option>
                <option value="valmiki">Valmiki Bhawan</option>
                </select>
                <HostelStat hostel={this.state.hostel} selected={this.state.selected} free={this.state.free} blocked={this.state.blocked} />
          </center>     
                {/* <Chart
                    width={'700px'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={threedata}
                    options={{    
                      title: `Wing distinctions  for ${this.state.hostel}  bhawan`,
                      is3D: true,
                  }}
                    rootProps={{ 'data-testid': '2' }}
                    /> */}
             
            </div>
            <Dialog ref={(component) => { this.dialog = component }} />
      </div>
        
     )
 }
}