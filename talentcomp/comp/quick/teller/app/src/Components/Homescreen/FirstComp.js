import React from "react"
import styled from "styled-components"
import Pic from "../../img/quick.png"
import Buttoncomp from "./ButtonComp"
const Firstcomp=()=>{
return(
    <Container>
<Right>
<H2>All the tools you need to grow your business, in one place</H2>
<H7>Our suite of integrated tools saves your time,so you can focus on growing revenue and delivering exceptional service to your customers</H7>
<Buttoncomp/>
</Right>
<Logo src={Pic} />
    </Container>
)
}
export default Firstcomp

const Container = styled.div`
// background-color: #123456;
height:500px;
width:80%;
margin-left:120px;
display:flex;
justify-content:space-between;
flex-direction:row;
`;
const Right = styled.div`
// background-color: grey;
height:420px;
width:40%;

display:flex;
flex-direction:column;
justify-content:space-around;
`
const Logo = styled.img`
height:450px;
width:53%;

object-fit:contain;
`
const H2 = styled.div`
font-size:39px;
`
const H7 = styled.div`
font-size:16px;
color: grey;
`
// const Logo = styled.img`
// 	height: 40px;
// 	width: 150px;
// 	/* background: silver; */
// 	object-fit: cover;
// `;