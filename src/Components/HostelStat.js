import React,{Component} from 'react';
import './Admin.css';
import { Chart } from "react-google-charts";


const threedata=
    [
        ['Status', 'Number Of Wings'],
        ['Selected', 0],
        ['Free', 0],
        ['Blocked', 0],
    ];

// const threeoptions={    
//         title: 'Wing distinctions for meera bhawan',
//         is3D: true,
//     };

 
export default class Admin extends Component{
 constructor(){
     super();
     this.state ={
      
     }
 }



 
 render(){
     return(
        
         <div>
            
             
             {
                 (()=>{
                    console.log('in hostel stats', this.props.selected,this.props.free, this.props.blocked);
                    threedata[1][1]=this.props.selected;
                    threedata[2][1]=this.props.free;
                    threedata[3][1]=this.props.blocked;
                 

                })()
             }
           <Chart
                    width={'700px'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={threedata}
                    options={{    
                      title: `Wing distinctions  for ${this.props.hostel}  bhawan`,
                      is3D: true,
                  }}
                    rootProps={{ 'data-testid': '2' }}
                    />
        </div>
             
     )
 }
}