import React,{Component} from 'react';
import Axios from 'axios';
import './Admin.css';
import { Chart } from "react-google-charts";
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
const threedata=
    [
        ['Status', 'Number Of Wings'],
        ['Selected', 0],
        ['Free', 0],
        ['Blocked', 0],
    ];

const threeoptions={    
        title: 'Wing distinctions for meera bhawan',
        is3D: true,
    };

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
 }

 componentDidMount(){
     Axios.get('http://localhost:5000/getUsers')
     .then((res)=>{
         console.log(res.data);
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

     Axios.get('http://localhost:5000/getWing')
     .then((res)=>{
         console.log(res.data);
         var free =0,blocked=0,selected=0;
         res.data.map((obj,index)=>{
            if(obj.bhawan==='meera')
            {
                if(obj.status==='selected')
                    selected++;
                else if(obj.status==='free')
                    free++;
                else
                    blocked++;
            }
         })
         threedata[1][1]=selected;
         threedata[2][1]=free;
         threedata[3][1]=blocked;
     })
 }
 render(){
     return(
         
             <div className="statistics">
               
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
            
                <Chart
                    width={'700px'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={threedata}
                    options={threeoptions}
                    rootProps={{ 'data-testid': '2' }}
                    />
             
            </div>
        
     )
 }
}