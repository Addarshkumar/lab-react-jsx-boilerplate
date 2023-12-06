import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    let data=this.imageData();
    console.log(data)
    // code here
    return(
        <>
        <h1 className='heading'>kalvium gallary</h1>
      <div className='parent'>
        {
          data.map((e)=>{
            return(
              <img className='image' src={e.img}/>
            )
          })
        }
  
        
  
      </div>
  
      </> 
    )
  }
  
}
