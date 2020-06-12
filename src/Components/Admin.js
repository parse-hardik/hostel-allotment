import React,{Component} from 'react';
import Axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';
import Card from "react-bootstrap/Card";

export default class Admin extends Component{
 constructor(){
     super();
     this.state={
        total: 0,
        nogroup :0,
     }
 }
 componentDidMount(){
     Axios.get('http://localhost:5000/getUsers')
     .then((res)=>{
         console.log(res.data);
         this.setState({total :res.data.length});
         var count =0;
         res.data.map((obj,index)=>{
             if(obj.gname==='null' && obj.name!=='admin')
              count++;
            return count;
         })
         this.setState({ nogroup : count});
     })
 }
 render(){
     return(
         <div>
             <h1>Admin Page!!!</h1>
             {console.log(this.state.total)}
             {console.log(this.state.nogroup)}
             <div className="d-flex justify-content-around">
                 <div>
                    <Card style={{ width: '25rem' ,backgroundColor :'#a4c8f5', height :'33rem'}}>
                    <Card.Body>
                    <PieChart
                        animation='true'
                        animationDuration={500}
                        animationEasing="ease-out"
                        radius ='30'
                        data={[
                        {
                        color: "#E38627",
                        title: "In a group",
                        value: this.state.total-this.state.nogroup,
                        },
                        {
                        color: "#C13C37",
                        title: "Not in a group",
                        value: this.state.nogroup,
                        }
                        ]}
                        label={(data) => data.dataEntry.title}
                        labelPosition={110}
                        lengthAngle={360}
                        lineWidth={35}
                        paddingAngle={0}
                        startAngle={0}
                        viewBoxSize={[110, 110]}
                        style={{height: '350px'}}
                        labelStyle={{
                            fontSize: "5px",
                            fontColor: "FFFFFA",
                            fontWeight: "800",
                        }}
                    />
                    <Card.Text>
                    <center>
                       <h4> Total = {this.state.total}</h4>
                   
                       <h4> Part of a group = {this.state.total-this.state.nogroup}</h4>
                   
                        <h4>Not in a group = {this.state.nogroup}</h4>
                        </center>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '25rem' ,backgroundColor :'#a4c8f5', height :'33rem'}}>
                    <Card.Body>
                    <PieChart
                        animation='true'
                        animationDuration={500}
                        animationEasing="ease-out"
                        radius ='30'
                        data={[
                        {
                        color: "#E38627",
                        title: "In a group",
                        value: this.state.total-this.state.nogroup,
                        },
                        {
                        color: "#C13C37",
                        title: "Not in a group",
                        value: this.state.nogroup,
                        }
                        ]}
                        label={(data) => data.dataEntry.title}
                        labelPosition={110}
                        lengthAngle={360}
                        lineWidth={35}
                        paddingAngle={0}
                        startAngle={0}
                        viewBoxSize={[110, 110]}
                        style={{height: '350px'}}
                        labelStyle={{
                            fontSize: "5px",
                            fontColor: "FFFFFA",
                            fontWeight: "800",
                        }}
                    />
                    <Card.Text>
                        <center>
                       <h4> Total = {this.state.total}</h4>
                   
                       <h4> Part of a group = {this.state.total-this.state.nogroup}</h4>
                   
                        <h4>Not in a group = {this.state.nogroup}</h4>
                        </center>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div>
                    <h3>Something else</h3>
                </div>
            </div>
         </div>
     )
 }
}