//23*12*25  & 24*12*25
import { useState } from 'react' //
import React from 'react'
const App = () => {
   const [name,setName]=useState("---")            //declaration line

  const dis=(event)=>{                       //name=default ,setname=changeing name
    setName(event.target.value)  //value=textbox la type panradhu & event.target=textbox 
    }
    const show=(v)=>{
      console.log(v)
    }
    const find=(v1,v2)=>{
      console.log(v1+v2)
    }
  
  return (
    <div>
        <form>
      <input type="text" value={name} onChange={dis} placeholder="enter user name"></input><br></br>
      <input type="password" onChange={()=>show("12345")} placeholder='enter password'></input><br></br>
      <input type="number"  onChange={()=>find(12,45)}placeholder='enter accno'></input><br></br>
      <input type="email" plsceholder='enter email:'></input><br></br>
      <label>select gender:</label>
      <input type="radio"></input>male
      <input type="radio"></input>Female
      <input type="radio"></input>others
      <br></br>
      <label>selecter gender</label>
      <input type="radio" name="gen"></input>male
      <input type="radio" name="gen"></input>Female
      <input type="radio" name="gen"></input>others
      <br></br>
      <lable>select course</lable>
      <input type="checkbox" name="c1"></input>C
      <input type="checkbox" name="c2"></input>c++
      <input type="checkbox" name="c3"></input>java
      <input type="checkbox" name="c4"></input>python
      <input type="checkbox" name="c5"></input>none of these above 
      <br></br>
      <select>
        <option selected>select month</option>
        <option>january</option>
        <option>february</option>
        <option>march</option>
        <option>april</option>
      </select>
      <br></br>
      select color:<input type="color" name="col"></input>
      <br></br>
      select DOB:<input type="date" name="dob"></input>
      <br></br>
      select time:<input type="time" name="time"></input>
      <br></br>
      select week: <input type="week" name="wk"></input>
      <br></br>
      uplode resume:<input type="file" name="f1"></input>
    <br></br>
    <label>type your address:</label>
    <textarea rows="7" cols="25"></textarea>
    <br></br>
    <label>list box</label>
    <select size="4" multiple>
      <option>sunday</option>
      <option>monday</option>
      <option>tuesday</option>
      <option>wednes day</option>
      <option>thursday</option>
      <option>friday</option>
      <option>saturday</option>
    </select>
    <br></br>
     <label>volume:</label>
    <input type="range" min="0" max="6"></input>
    <button><b><s>clickme</s></b></button>
      <br></br>
      <label>type your feedback</label>
      <input type="submit"></input>
      <input type="button" value="clickme"></input>
      {/* <progress min="0" max="100" value="90" ></progress>  */}
      <br></br>
      <label>progress bar 90% completed</label>
      <progress style={{backgroundColor:'blue',border:"2px solid orange"}} min="0" max="100" value="90" ></progress>
      <br></br>
      <font size="7">😎😎😎🎶🎶</font>
      </form>
    </div>
  )
}

export default App


//22*12*25
//finding data type
/*function App(props)
{
  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies
  return(<>
  <h3>type of rno:{typeof(a)}</h3>
  <h3>type of sname:{typeof(b)}</h3>
  <h3>type of martial status:{typeof(c)}</h3>
  <h3>type of marks:{typeof(d)}</h3>
  <h3>{Array.isArray(d)?"it is array":"it is object json"}</h3>
  <h3>{Array.isArray(e)?"it is array":"it is object json"}</h3>
  </>
  )
}
export default App

/*import parse from 'html-react-parser' //function components
function App(props)
{
  var ans=""
  for(var s in props.data)
  {
    ans=ans+`<li>${s}=${props.data[s]}</li>`
    console.log(s)
  }
  return(
    <>
    {parse("<ol>"+ans+"</ol>")}
      </>
  )
    }
  export default App


//class components
/*import React from"react";
import parse from 'html-react-parser';
class App extends React.Component
{
  constructor(props)
  {
  var ans=""
  super(props)
  for(var s in props.data)
  {
    ans=ans+`<li>${s}=${props.data[s]}</li>`
    console.log(s)
  }
  this.state={
    res:"<ol type='I'>"+ans+"</ol>"
  }
}
render()
{
  return(<>
  <h1>combine react state+ properties</h1>
  {parse(this.state.res)}
  <div id="res"></div>
  </>)
  }
  }
  export default App


/*import React from "react";
 import parse from'html-react-parser';
 class App extends React.Component
 {
  constructor(props)
 {
  var ans=""
  super(props)
  for(var s in props.data)
  {
    ans=ans+`${s}=${props.data[s]}<br></br>`
    console.log(s)
  }
  this.state={
    res:ans
  }
}
render()
{
  return(
    <>
    <h1>combine react state+props</h1>
    {parse(this.state.res)}
    <div id ="res"></div>
    </>
  )
}
 }
 export default App
 
 /*import React from "react";
 class App extends React.Component
 {
  constructor()
  {
    super()
    this.state={
      sno:111,
      sname:"Arul",
      marks:[95,88,87,65,100]
 }
  }
  show=()=>{
    this.setState({sname:"Arulmozhi M"})
  }
  dis=()=>{
    this.setState({marks:[10,23,45,34,45]})
  }
  dis1=()=>{
    const newmarks=[...this.state.marks]
    newmarks[2]=99
    this.setState({marks:newmarks})
  }
render()
  {
    return(<>
    <h1>This is class components</h1>
    <h2>serial number:{this.state.sno}</h2>
    <h2>student name:{this.state.sname}</h2>
    <h2>student mark:{this.state.marks} </h2>
    {this.state.marks.map((v,index)=><>mark:{index+1}={v}<br></br></>)}
    <button onClick={this.show}>update name</button>
    <button onClick={this.dis}>update all mark</button>
    <button onClick={this.dis1}>update single </button>
    </>)
  }
}
export default App
 
 
 
 
 /* import Arulmozhi from "./mycomponents/Arulmozhi" 
import { aadhar, accno, place, sname } from "./mycomponents/commonvar"


  function App()
  {
    return(
      <>
      <Arulmozhi/>
      <h1>this is default App components</h1>
      <h2>my name is :{sname}</h2>
      <h3>my city:{place}</h3>
      <h3>my aadhar:{aadhar}</h3>
      <h4>my accno :{accno}</h4>
      </>
    )
  }
  export default App
  
  
  /*function App()
 {
  var arr=[11,22,33,44,78,98,43,27,678,101,420,12]
  var ma=arr[0]
  var s=0

  var order=arr
  var fans=""
  return(
    <>
    <h1>React loop map method </h1>
    <h2>old model</h2>
    {arr[0]}
    {arr[1]}
    {arr[3]}
    <h2>New Model Map (loop)</h2>
    {arr.map((v)=><>{v}+</>)}
    <h2>New Model Map (loop)</h2>
    <ol type="I">
      {arr.map((v)=><li>{v}</li>)}
    </ol>
    <h2>task:sum of arry</h2>
    <div style={{display:"none"}}>
      {arr.map((item)=><>{s=s+item}<br></br></>)}
    </div>
    <h3>Sum of Array:{s}</h3>

    <div style={{display:"none"}}>
      {arr.map((v)=><>{ma<v && <>{ma=v}</>}</>)}
    </div>

    <h3>Max of Array:{ma}</h3>
    

    <h2>Ascending order</h2>
    <div style={{display :"none"}}>{order.sort((x,y)=>(x-y))}=><>{fans=fans+item+","}</>)}</div>
   {fans.slice(0,-1)}</div>
    {order.map((item)=><>{item } + </>)}

    <h2>descending order</h2>
    <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
    {order.map((item)=><>{item} ,</>)}

<h3>Adding element in an array</h3>
<div style={{display:"none"}}>{order.push(999)}</div>
{order.map((item)=><>{item},</>)} ;
<br></br> 


<h3>romove last element in an array </h3>
<div style={{display:"none"}}>{order.pop()}</div>
<div style={{display:"none"}}>{order.pop()}</div>
<div style={{display:"none"}}>{order.pop()}</div>
{order.map((item)=><>{item},</>)}

<h2>Remove last comma or plus or any char</h2>
<div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
{fans.slice(0,-1)}

  
 </>)}
 export default App
 
 
 
 /*function App()
 {
  var arr=[11,22,33,44,55,66]
  var [v1,,v2,...v3]=arr
  return(<>
  <h2>spread operator</h2>
  <h3>index 0:{v1}</h3>
  <h3>index 1:{v2}</h3>
  <h3>index 5:{v3}</h3>
  </>)
 }
 export default App
 

 /*function App()
{
  var res="fail"
  var avg=85.6
  return(<>
  <h2>
    {
     (res==="pass" && 
      ((avg>=85 && "outstanding")||
      (avg>=75 && "excellent")||
      (avg>=65 && "very good")||
      (avg>=50 && "good")||
      "fair")) || "no grade becasue fail" }
  </h2>
  </>)
    }
export default App



/*function App()
{
  var unit =130
  return(
    <>
    <center><h2>Electricity Bill Calculation</h2></center>
   <h3>{(unit<=100 && "Rs.0") || (unit>=101 && unit<=200 && "Rs."+(unit-100)*2)||
    (unit>=201 && unit<=300 && "Rs."+(200+(unit-200)*3))||
    (unit>=301 && unit<=400 && "Rs."+(500+(unit-300)*4))||
    "Rs."+(900+(unit-400)*5)
    }</h3>
    </>
  )
}
export default App



/*function App()
{
var unit=102
 return(<>
 <center><h2>Electricity Bill Calculation</h2></center>
 <h3>{(unit<=100 && "Rs.0")||
  (unit>=101 && unit<124 && "Rs.50")||
 (unit>=125 && unit<200 && "Rs."+(unit-100)*2)||
 (unit>=201 && unit<=300 && "Rs."+(200+(unit-200)*3))||
 (unit>=301 && unit<=400 && "Rs."+(500+(unit-300)*4))||
   "₹"+(900+(unit-400)*5)
   }</h3>
    </>)
  }
export default App 



/*function App()
{
  var avg=45
  return(<>
  <h1>React Simple if else if statement</h1>
  <h2>{(avg>=85 && "outstanding")||(avg>=75 && "excellent")||(avg>=65 && "very good")||(avg>=50 && "good")|| "fair"}</h2>
  </>)
}
export default App

/*
function App()
{
  var age =20
  return(<>
  <h1>{(age>10& "eligible")||"not eligible"}</h1>
  </>)
}
export default App


/*function App()
{num=100
  return(<>
  <h1>React Simple if statement</h1>
  <h2>{(+ve>-ve && "POSITIVE")||"NEGATIVE"}</h2>
  </>)
}
export default App


/*function App()
{
  var No =100
  return(<>
  <h1> React Simple if statement</h1>
  <h2>{(No>101 && "odd")||"Even"}</h2>
  </>)
}
export default App

/*function App()
{
  var mark=4
  return(<>
  <h1>React Simple if statement</h1>
  <h2>{(mark>34 && "PASS")||"FAIL"}</h2>
  </>)
}
export default App


/*function App()
{
  if(true)
  {
    var v=100
    let l=200
    const c=300
    v++;
    l++;
    console.log("let:"+1);
    //c++
    console.log("const:"+c);
  }
    return(
      <>
      <h1>variable : global : {v}</h1>
      <h1>does not work let and const : because local</h1>
      </>
    )
  }
  export default App





/*function App()
{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
    document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
  }
  return(<>
  <h2>Arrow Function with parameter</h2>
  <h3>Note: onClick C must be caps <br></br>don't use double qutoes</h3>
  <h3>Note:in calling function must use parenthesis args</h3>
  <button onClick={()=>myfun(10,20,30)}>click me </button>
  <div id="res"></div>
  </>)
}
export default App



/*function App()
{
  let myfun=()=>{
    document.getElementById("res").innerHTML="congrats you clicked the button";
  }
  return(<>
  <h2>Arrow function without parameter</h2>
  <h3>Note:onClick C must be caps <br></br>don't use double qutoes</h3>
  <h3>Note:in calling function dom't use parenthesis when without passing args</h3>
  <button onClick={myfun}>click me </button>
  <div id="res"></div>
  </>)
}
export default App






/*import nature from'./images/img1.jpg'
function App()
{
return(<>
<h2>Image Demo using path as expression </h2>
<img src={nature} width="50%" height="auto" alt="path is wrong"></img>
</>)
}
export default App



/*function App()
{
  var a=300
  var b=200
  var c=400
  return(
    <>
    <h2>Biggest  Amoung 2 no's using conditional or ternaray operator </h2>
    <h1>Biggest Number a or b:{a>b?a:b}</h1>
    <h1>Biggest Number a or b or c:{(a>b && a>c) ?a:(b>c?b:c)}</h1>
    </>
  )
}
export default App

/*function App(){
  //javascript learned Code
  var a=10
  var b=20
  var c="ARUL"
  return(<>
  <h1>total:{a+b}</h1>
  <marquee bgcolor='pink'><font size='8'>{c}</font></marquee>
    </>)
}
   export default App



/*import React from "react";

/*class Parent extends React. Component
{
  render()
  {
    return(<>
    <h1>this is parent class </h1>
    <h1>this is parent class</h1>
    <h1>this is parent class</h1>
    </>)
  }
}
class App extends Parent
{
  render()
  {
   return(<>
   <Parent/>
    <h1>Welcome to Class Components</h1>
    <h1>Welcome to Class Components</h1>
    <h1>Welcome to Class Components</h1>
  <h1>Welcome to Class Components</h1>
  <p>Voluptate dolor nulla aliquip id veniam. Fugiat adipisicing dolore excepteur adipisicing eiusmod sint irure. Veniam elit adipisicing deserunt reprehenderit mollit nulla cupidatat adipisicing aute adipisicing do. Officia ut incididunt elit do.

Esse enim magna occaecat voluptate fugiat duis. Reprehenderit ullamco esse et ut qui Lorem magna minim magna ullamco nulla officia pariatur ex. Culpa do mollit ex aliquip cillum adipisicing adipisicing fugiat nostrud culpa fugiat. Quis in et officia sunt ea et ea sint culpa esse minim eiusmod.


Reprehenderit pariatur velit in amet occaecat officia. Ad exercitation enim culpa ad sint aute consectetur magna fugiat reprehenderit. Est laboris eiusmod incididunt sint minim esse irure ex incididunt laborum. Sint sunt eiusmod ut exercitation et sunt pariatur nostrud consectetur consequat. Veniam velit veniam enim exercitation nostrud quis eu occaecat. Veniam nisi sit quis nostrud id exercitation dolore officia elit. Nostrud aliquip quis velit laboris reprehenderit do sunt qui eu sit quis aliqua aute excepteur.

Eiusmod tempor reprehenderit pariatur culpa eiusmod magna nostrud magna esse aliqua dolor non esse. Enim quis cillum excepteur labore labore eiusmod aliqua velit laboris. Eiusmod consequat pariatur qui exercitation nulla amet anim adipisicing mollit. Enim est laborum amet sunt adipisicing mollit veniam tempor ex ad ad. Labore laborum officia irure incididunt ullamco aliquip nulla do amet. Cupidatat veniam do consequat in anim reprehenderit. Elit cupidatat labore ad sint non.

Duis consectetur ex duis culpa ad ea id nisi aute dolore magna. Ullamco duis fugiat consequat laboris anim enim veniam. Commodo nulla qui minim sunt.</p>
</>)
  }
}
export default App

/*function App()
{
  return(
    <div>
      <h1>Welcome To Reactjs</h1>
       <h1>Welcome To Reactjs</h1>
     <h1>Welcome To Reactjs</h1>
     </div>
  )
}
 export default App 
 




/* // import logo from './logo.svg'; */
/* // import './App.css'; */

/* // function App() { */
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App
