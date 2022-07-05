import React from "react";
import "./App.css";
import pic from "./img/tylogo.png"
import pic1 from "./img/hero.png"
import pic2 from "./img/path.png"
import pic3 from "./img/icon.png"

const App = () => {
	return (
<div className="maincontainer">
<div className="hero">
	<div className="header">
		<div className="right">
			<img src={pic}></img>
		</div>
		<div className="middle">
		<button>PLAY</button>
			<button>PARENT</button>
			<button>EDUCATORS</button>
			<button>WHYCODE?</button>
		</div>
		<div className="left">
			<button className="btn">JOIN FOR FREE</button>
			<button>LOG IN</button>
		</div>
	</div>
	<div className="content">
		<div className="text">
		<h1>Coding Made Easy</h1>
	  <h3>The fun way to learn programming and develop problem-solving & critical thinking skills! Ages 5-18</h3>
	  <button className="btns">GET STARTED FOR FREE</button>
	  <h3>At-home plans from $9 per month</h3>
		</div>
		<div >
		<div className='heroine'><img src ={pic1}></img></div>
		</div>
	</div>
</div>
<div className="subcontainer">
	<div className="sub1">
	<h2>The #1 Coding Platform for Kids</h2>
<h4>Tynker powers the creativity of over <span>60 million kids</span> and serves thousands of schools and educators worldwide.</h4>
<h4>Our interactive story-based learning allows kids to learn the basics with easy block-based coding challenges before seamlessly transitioning to real-world text-based languages like<span> JavaScript</span> and <span>Python</span>.</h4>
<h4>With 65+ award-winning courses, there’s a learning path for every kid, no matter their age or level. We have over 5,000 learning modules, backed by hundreds of built-in tutorials and hands-on projects.</h4>
<button className="btns">START CODING NOW</button>
	</div>
	<div className="sub2"><img src ={pic2}></img></div>
</div>
<div className="minicontainer">
	<h2>
Tynker has been busy. Good Busy. Check out what’s NEW!</h2>
<div className="mini">
<div className="mini1">
<img src ={pic3}></img>
<h4>2 New AP® CS courses endorsed by the College Board.</h4>
	</div>
	<div className="mini2">
	<img src ={pic3}></img>
<h4>2 New AP® CS courses endorsed by the College Board.</h4>
	</div>
	<div className="mini3">
	<img src ={pic3}></img>
<h4>2 New AP® CS courses endorsed by the College Board.</h4>
	</div>
</div>
</div>
	 </div>
	);
};

export default App;