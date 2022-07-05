import React from "react";
import styled from "styled-components";

const ButtonComp = () => {
	return <Button>Sign Up</Button>;
};

export default ButtonComp;
const Button = styled.div`
	background-color: white;
	height: 40px;
	width: 150px;
	border-radius: 5px;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		background-color: transparent;
		border: 1px solid gray;
		color: white;
	}
`;
