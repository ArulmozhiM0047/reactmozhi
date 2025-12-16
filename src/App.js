function App()
{
var unit=102
 return(<>
 <center><h2>Electricity Bill Calculation</h2></center>
 <h3>{(unit<=100 && "Rs.0")||
  (unit>=101 && unit<125  && "Rs.50")||
 (unit>=101 && unit<200 && "Rs."+(unit-100)*2)||
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
