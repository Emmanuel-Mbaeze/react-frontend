import React, { useState,useEffect} from "react"
import "./App.css"
import pic from "./img/search.png"
import pic1 from "./img/005-next.png"
import pic2 from "./img/007-back.png"
import pic4 from "./img/d1.png"
import pic5 from "./img/d2.png"
import pic6 from "./img/d3.png"
import pic7 from "./img/d4.png"
import pic8 from "./img/d5.png"
import pic9 from "./img/d6.png"
import pic10 from "./img/d7.png"
import pic11 from "./img/d8.png"
import pic12 from "./img/d9.png"
import pic13 from "./img/d10.png"
import pic14 from "./img/d11.png"
import pic15 from "./img/d12.jpg"
import pic16 from "./img/d13.jpeg"
import pic17 from "./img/images.png"
import pic18 from "./img/wr.jpg"
import pic19 from "./img/images1.jpg"
// import picq from "./img/mtr.png"
// import picr from "./img/ttt.png"
// import pict from "./img/kkk.png"
// import picu from "./img/toor.png"
// import picv from "./img/lover.jpg"
// import picw from "./img/hand.jpg"
// import picx from "./img/woo.jpg"
// import pic3 from "./img/Kobo.jpeg"
const App = () =>{
    const [counter, setCounter]=useState(0)
    const bgcolortext = [
    {
        bg:"#123e7d",
        text:"Land your dream job,home and abroad"
    },
     {
        bg:"#12687d",
        text : "Hungry for more in your career"
     },
{
    bg: "#7fffd4",
    text : "our job board helps you find career oppotunities"
}]
    const addcount =()=>{
        setCounter(counter +1)
    }
    const redcount =()=>{
       if(counter === 0){
           setCounter(counter)
       }
    }
   useEffect(()=>{
       setInterval(()=>{
           setCounter((el)=>el +1);
       }, 5000)
   }, []);
    return(
        <div>
            <div className="head">
            <div className="header">
              <img src={pic17}></img>  
                <div className="wrap">
                <div className="left">  <h3>Find job</h3> </div>
                <div className="left">  <h3>Coaching</h3> </div>
                <div className="left"> <h3>Sign in </h3> </div>
                    <button className="dix">For Employers</button>
                </div>
            </div>
            </div>
<div className="maincontainer">
<div style ={{
    backgroundColor:bgcolortext[counter %  bgcolortext.length].bg}} className="subcontainer">
<h2>
 {bgcolortext[counter %  bgcolortext.length].text}</h2>
<div>We connect you with top companies hiring talented professionals in the  <span>US</span> and <span>Africa</span></div>
<div className="input-hold">
<div className="search-icon"><img src ={pic}></img></div>
<input placeholder="SEARCH"></input>
<button>Search</button>
</div>
<div className="myhold">
<div onClick={redcount} className="icon"><img src ={pic2}></img></div>
<div onClick ={addcount} className="icon"><img src ={pic1}></img></div>

</div>
</div>
<div className="container">
    <h2>Recently posted jobs</h2>
    <div className="content">
        <div className="contentone">
        <div className="subcontentone">
            <img src ={pic16}></img>
            </div>
            <div className="frsubcontentone">
            <h3>Backend Engineer</h3>
<p>Kobo 360 (Kobo Logistics ...</p>
<h7>Lagos</h7>
<div className="btn"> <h6> 5 months ago</h6>
    <button className="btnone">APPLY</button></div>
            </div>
        </div>


        <div className="contenttwo">
            <div className="subcontentone">
            <img src ={pic16}></img>
            </div>
            <div className="frsubcontenttwo">
            <h3>Influencer and community</h3>
<p>Reliance HMO limited...</p>
<h7>Lagos</h7>
<div className="btn"> <h6> 5 months ago</h6>
    <button className="btnone">APPLY</button></div>
            </div>
            </div>
    </div>
</div>
<div className="containertwo">
<h2>Explore US-based jobs</h2>
<div className="content">
        <div className="contentone">
        <div className="subcontentone">
            <img src ={pic15}></img>
            </div>
            <div className="frsubcontentone">
            <h4>IOS Mobile Developer...</h4>
<h4>TUA Nigeria Inter-Global...</h4>
<div className="btn"> <h6> 7 days ago</h6>
    <button className="btnone">APPLY</button></div>
            </div>
        </div>


        <div className="contenttwo">
            <div className="subcontenttwo">
            <img src ={pic15}></img>
            </div>
            <div className="frsubcontenttwo">
            
<h4>Backend software engine...</h4>
<h4>TUA Nigeria Inter-Global...</h4>
<div className="btn"> <h6> a months ago</h6>
    <button className="btnone">APPLY</button></div>
            </div>
            </div>
    </div>
    <button className="bt">EXPLORE ALL JOBS</button>
</div>
<div className="containerthree">
    <h2>Companies recruiting from our talent list</h2>
    <div className="section">
    <img src ={pic4}></img>
    <img src ={pic5}></img>
    <img src ={pic6}></img>
    <img src ={pic7}></img>
    </div>
   <div className="sec">
   <img src ={pic8}></img>
    <img src ={pic9}></img>
    <img src ={pic10}></img>
    <img src ={pic11}></img>
    </div>
</div>
<div className="containerfour">
<h2>Let's help you stand out</h2>
<div className="subcontainerfour">
<div className="frsubcontainerfour">
<h2>Join our talent list</h2>
<h7>Create you professional profile by uploading your CV and filling a profile form</h7>
<h5><span>JOIN NOW </span></h5>
</div>
<div className="scsubcontainerfour">
<img src ={pic12}></img>
</div>
</div>
</div>
<div className="containerfour">
<div className="subcontainerfour">
<div className="scsubcontainerfour">
<img src ={pic18}></img>
</div>
<div className="frsubcontainerfour">
<h2>Get US-based remote jobs</h2>
<h7>Finding your dream remote job just got easier.We curate and deliver jobs in the US straight to your inbox</h7>
<h5><span>Find jobs</span> </h5>
</div>
</div>
</div>
<div className="containerfour">
<div className="subcontainerfour">
<div className="frsubcontainerfour">
<h2>Showcase your  talent by taking our HR-endorsed assessment </h2>
<h7>Pass the online assessment once and for all</h7>
<h5><span>>LEARN MORE </span></h5>
</div>
<div className="scsubcontainerfour">
<img src ={pic19}></img>
</div>
</div>
</div>
<div className="containerfour">
<div className="subcontainerfour">
<div className="scsubcontainerfour">
<img src ={pic14}></img>
</div>
<div className="frsubcontainerfour">
<h2>Career coaching</h2>
<h7>We offer periodic FREE career coaching to mid-senior level managers.
    We help you review your career path,optimize your CV to land bigger
    roles,prep you for interviews and negotiations.
</h7>
<h5><span>LEARN  MORE</span></h5>
</div>
</div>
</div>
<div className="last">
    <div className="lastman">

    <div className="lastcon">
<h2>Land a dream US remote job</h2>
<h6>Employers are always checking our pool of talent for their next hire</h6>
<div className="btnn">
    <button className="butts">Join now</button>
    <button className="butt">Search jobs</button>
</div>
</div>
    </div>
   <div className="lastcont"> <img src ={pic13}></img></div>
</div>

</div>
</div>
    )
}
export default App