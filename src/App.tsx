import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Landing } from './pages/Landing';
import { TextField } from './TextField';

function App() {
  const [number,setNumber]=useState<number>(1);

  // const PROFILE=[
  //   {id:1,image:"hello",name:"GOD",notes:"pieie"},
  //   {id:2,image:"hi",name:"YO",notes:"eeee"},
  //   {id:3,image:"bye",name:"OY",notes:"fffff"},
  //   {id:4,image:"good bye",name:"YOU",notes:"ffffff"}
  // ]

  const changeNumber=()=>{
    setNumber(10);
  }  

  // const nameDisplay=(name:string)=>{
  //   return name
  // }

  return (
    <div className="App">
      <Landing/>
      {/* <TextField 
        text='hello' 
        value={50} person={{firstName:'Raju',lastName:'sharma'}} 
        // fn={nameDisplay} 
        inputHandler={e=>e.target.value}
      /> */}
      {/* {console.log(number)}
      {number} */}
      {/* <button onClick={changeNumber()}>Change Number</button> */}
    </div>
  );
}

export default App;
