import React,{useState} from "react"
import "./App.css"
const App = ()=>{
    const [counter,setCounter] = useState(0)
    const [text, setText] = useState("")
    const [author,setAuthor] = useState("")
    const [data, setData] = useState([
        {name:"Dickson",
        quote:"i love react.js"
        },
        {name:"Emmanuel",
        quote:"dera self, i'll never give up on you"
        },
        {name:"leke",
        quote:"you can't rush something you want to last"
        },
        {name:"Dera",
        quote:"dream big,pray bigger"
        },
        {name:"raheem",
        quote:"be patient with yourself"
        },
        {name:"lucy",
        quote:"believe in yourself"
        },
        {name:"precious",
        quote:"you'll survive don't give up"
        }
    ])
    const addCount=()=>{
        setCounter(counter +1)
        console.log(counter)
    };
    const spinCount = ()=>{
        setCounter(Math.floor(Math.random() * data.length))
        console.log(counter)
    }
    const minusCount = ()=>{
        setCounter(counter -1)
        console.log(counter)
    }
    const changes = (e)=>{
        setText(e.target.value)
    };
    const changesName = (e)=>{
        setAuthor(e.target.value)
    }
    const addQoute = ()=>{
        const val = {
            name:author,
            quote:text,
        }
        setData([...data, val])
        console.log(data)
    }
    return(
        <div className = "wrapper">
            <div className = "container">
                <div className="header">
                    <h2>QUOTES...</h2>
                    <input onChange={changesName} placeholder="input name"></input>
                    <br></br>
                    <input  onChange={changes}placeholder="input qoutes"></input>
                </div>
                <div className="btn"><button onClick={addQoute}>Add</button></div>
                <div className="content">
                    "{data[counter%data.length].name}"
                    <div className ="subcontent"></div>
                    "{data[counter%data.length].quote}"
                </div>
                <div className = "footer">
                {counter ===0 ? null :(
                <button onClick={minusCount}>Prev</button>
                )}
                <button onClick={spinCount}>Spin</button>
                <button onClick={addCount}>Next</button>
                </div>
            </div>
        </div>

    )
}
export default App



























































































































































































































































































































































// import React, {useState} from "react"
// import "./App.css"
// const App =()=>{
//   const [counter,setcounter]=useState(0)
//   const addCount = ()=>{
//     setcounter(counter + 1);
//   };
//   const redCount = ()=>{
//     setcounter(counter - 1);
// if (counter ===0){q
//   setcounter(counter)
// }
// };

//   return(
//     <div className = "container">
//         <button onClick={addCount}>+</button>
//         <h1>{counter}</h1>
//         <button onClick={redCount}>-</button>
  
//     </div>

//   );
// };
// export default App

// class component
// class MyComponent extends React.Component{
//   constructor(props){
//       super(props);
//   };
//   render(){
//       return(
//           <div>
//             <h1>
//               My First React Component!
//             </h1>
//           </div>
//       );
//   }
// };
// export default MyComponent

// const App =()=>{
//   const [Counter, setCounter]=useState(0)
//   const Words =
//    ["God is good",
//    "Don't let idiots ruin your day",
//    "Time is money spend wisely",
//    "Think happy thought",
//    "Do more of what makes you happy"
          
// ];
// const Next =()=>{
//   setCounter(Counter + 1);
// }
// const Prev =()=>{
//   setCounter(Counter -1);
//   if(Counter == 0){
//     setCounter (Counter)
//   };
// }
//   return(
//   <div
//   style={{
//     display:"flex",
//     width:"100%",
//     height:"100vh",
//     justifyContent:"center",
//     alignItems:"center",
//   }}>
//    <div>
//    <div
//     style={{
//       width:"500px",
//       height:"300px",
//       borderRadius:"20px",
//       border:"grey solid 1px",
//       backgroundColor:"#123456",
//       color:"white",
//       display:"flex",
//       justifyContent:"center",
//       alignItems:"center",
//     }}>
//       {Words[Counter % Words.length]}
//    </div>
//    <div
//     style={{
//       display:"flex",
//       justifyContent:"space-between",
//       width:"500px",
     
//     }}>
//    <button onClick={Prev}>Prev</button>
// <button onClick={Next}>Next</button>

//    </div>
//    </div>
 
  
//   </div>
//   )
// }
// export default App








// import React, { useState } from "react"
// import "./App.css"
// const App=()=>{
//   const [textval, setTextval]=useState("");
//   const [textnames, setTextnames]=useState("")
//   const [counter,setCounter]=useState(0);
//   const [word, setWord]=useState([
//     "God is good",
//     "you'll survive don't give up now",
//     "if you get tired learn to rest and not quit",
//     "standing alone is better than standing with those who hurt you",
//   ]);
//   const [people, setPeople]=useState([
//     "~Kate",
//     "~Ruth",
//     "~Joe",
//     "~Matthew",
//   ])
//   console.log(word);
//   const addCounter = ()=>{
//     setCounter(counter +1);
//     console.log(counter)
//   };
//   const prevCounter =()=>{
//    if (counter===0){
//      setCounter(counter)
//    }
//    setCounter(counter -1);
//   };
//   const AddQoute = ()=>{
//     setWord([...word, textval]);
//     console.log(word)
//   };
//   const AddName =()=>{
//  setPeople([...people, textnames]);
//   }
//   return(
//   <div className = "wrapper">
//     <div className ="container">
//   <div className = "header">
//     <h2>QUOTES...</h2>
//    <input onChange={
//     (e)=>{
//       setTextval(e.target.value);
//     }
//   } placeholder="input quote"></input>
   
  
//    <div className="he">
//    <input onChange={
//     (e)=>{
//       setTextnames(e.target.value);
//     }
//   } placeholder="input Name"></input>
    
//    </div>
//    <button   onClick={AddQoute }>ADD</button>

//   </div>
//   <div className = "content">
//   <img></img>
//    <div className= "cont">"{word[counter%word.length]}" </div>
//    {people[counter%people.length]}
   
//   </div>
//   <div className ="footer">
//     <button onClick={prevCounter}>Prev</button>
//     <button onClick={addCounter}>Next</button>
//   </div>
//   </div>
//   </div>
//   )
// }
// export default App





import React,{ useState} from "react"
import "./App.css"
const App = ()=>{
    const [counter,setCounter]= useState(0)
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const [data, setData] = useState([
        {
            name:"Dickson",
            quote:"i love react"
        },
        {
            name:"Emmanuel",
            quote:"dear self,i'll never give up on you"
        },
        {
            name:"leke",
            quote:"you can't rush something you want to last "
        },
        {
            name:"dera",
            quote:"dream big,pray bigger"
        },
        {
            name:"raheem",
            quote:"be patient with yourself"
        },
        {
            name:"lucy",
            quote:"believe in yourself"
        },
        {
            name:"precious",
            quote:"you'll survive dont give up now"
        },
    ]);
    const addCount = ()=>{
        setCounter(counter +1)
        console.log(counter)
    };
    const spinCount = ()=>{
        setCounter( Math.floor(Math.random() * data.length))
        console.log(counter)
    }
    const minusCount=()=>{
        if(counter === 0){
            setCounter(counter);
        }else{
            setCounter(counter -1)
        }
    };
    const changes = (e) =>{
        setText(e.target.value);
    };
    const changesName = (e) =>{
        setAuthor(e.target.value)
    }
    const addQoute = ()=>{
        const val ={
            name:author,
            quote:text,
        }
        setData([...data,val])
        console.log(data)
    }
    return(
        <div className="wrapper">
            <div className = "container">
                <div className="header">
                    <h2>QUOTES...</h2>
                    <input onChange={changesName} placeholder="input name"></input>
                    <br></br>
                    <input onChange={changes} placeholder="input quote"></input>
                </div>
                <div className="btn"><button onClick={addQoute}>Add</button></div>
                < div className="content">
                "{data[counter%data.length].quote}"
                <div className= "cont">
   
                 "{data[counter%data.length].name}"
                 </div>
                </div>
                <div className="footer">
                   {counter === 0 ? null :(
                        <button onClick={minusCount}>Prev</button>
                  )} 
                    <button onClick={spinCount}>Spin</button>
                    <button onClick ={addCount}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default App


















