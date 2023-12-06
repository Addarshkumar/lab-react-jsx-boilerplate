import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  let data=imageData();
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

export default App;
