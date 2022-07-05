import React from "react";
import styled from "styled-components";
import ButtonComp from "../HomeScreen/ButtonComp";
import pic from "../img/lo.png";

const Header = () => {
	return (
		<Container>
			<Logo src={pic} />
			<NavHold>
				<Nav>Home</Nav>
				<Nav>About</Nav>
				<Nav>Contact</Nav>
			</NavHold>
			<ButtonComp></ButtonComp>
		</Container>
	);
};

export default Header;

const NavHold = styled.div`
	display: flex;
`;
const Nav = styled.div`
	margin: 10px;
`;

const Logo = styled.img`
	height: 40px;
	width: 150px;
	/* background: silver; */
	object-fit: cover;
`;

const Container = styled.div`
	background-color: #123456;
	color: white;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
