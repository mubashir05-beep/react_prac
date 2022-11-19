import { useState,useEffect } from 'react';
import './App.css';


// const Person=(props)=>{
// return(
//   <>
//   <h1>Name : {props.name}</h1>
//   <h1>Last : {props.lname}</h1>
//   <h1>Age : {props.age}</h1>
//   </>
// );
//}
const App=()=> {
  const name='Mob';
  const [counter, setCounter]=useState(0);
 useEffect(()=>{
  setCounter(100)
 },[]);
  return (
    <div className="App">
    <button onClick={counter>=0?()=>setCounter((prevCount)=>prevCount-1):setCounter((prevCount)=>prevCount=0)}>-</button>
    <p>{counter}</p>
    <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>

         {/* /* <Person name={'Mubashir'} lname={'Khan'} age={19}/>
   {/* { name?<><h1>{name}</h1></>:<><h1>Failed</h1></>} */}  
    </div>
  );
}

export default App;

