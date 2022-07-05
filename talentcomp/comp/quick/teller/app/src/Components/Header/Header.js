import React from "react";
import styled from "styled-components";
import Pic1 from "../../img/logo.svg"
import Buttoncomp from "../Homescreen/ButtonComp";
const Header = () => {
	return (
		<Container>
		<Logo src={Pic1}/>
		<Middle>
			<H4>Overwiew</H4>
			<H4>Storefont</H4>
			<H4>Pricing</H4>
			<H4>Checkout Demo</H4>
			<H4>Developers</H4>
		</Middle>
		<Left>
		<H4>Sign Up</H4>
		<Buttoncomp/>
		</Left>
		</Container>
	);
};

export default Header;

const  Container = styled.div`
// background-color:black;
color:white;
height:70px;
width:80%;
margin-left:120px;
display:flex;
align-items:center;
justify-content:space-between;
`;
const Logo = styled.img`
height:150px;
width:150px;
object-fit:contain;
`

const Middle = styled.div`
	display: flex;
`;
const H4 = styled.div`
	margin: 10px;
	color:black;
`;
const Left = styled.div`
width:200px;

display:flex;
justify-content:space-between;
flex-direction:row;
`
















// const Container = styled.div`
// 	background-color: #123456;
// 	color: white;
// 	height: 70px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-around;
// `;








// import React from "react";
// import styled from "styled-components";
// // import ButtonComp from "../HomeScreen/ButtonComp";
// import pic from "../";

// const Header = () => {
// 	return (
// 		<Container>
// 			<Logo src={pic} />
// 			<NavHold>
// 				<Nav>Home</Nav>
// 				<Nav>About</Nav>
// 				<Nav>Contact</Nav>
// 			</NavHold>
// 			{/* <ButtonComp></ButtonComp> */}
// 		</Container>
// 	);
// };

// export default Header;

// const NavHold = styled.div`
// 	display: flex;
// `;
// const Nav = styled.div`
// 	margin: 10px;
// `;

// const Logo = styled.img`
// 	height: 40px;
// 	width: 150px;
// 	/* background: silver; */
// 	object-fit: cover;
// `;

// const Container = styled.div`
// 	background-color: #123456;
// 	color: white;
// 	height: 70px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-around;
// `;
