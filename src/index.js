import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'

var sobj={
  rno:1001,
  sname:"Arulmozhi",
  mark:12,
  rank:37,
  grade:"super",
  location:"vangal",
  issingle:true,
  aadhar:"213678989809",
  phone:"6798543623",
  height:"165cm",
  hobbies:{
    hob1:"throwball",
    hob2:"hearing story",
    hob3:"speaking"
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
