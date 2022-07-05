import React from "react";
import Styled from"styled-components"
import Buttoncomp from "../Homescreen/ButtonComp";
const Headercomp=({year,month,day,course,price,direc})=>{
    return(
<Container>
    <Wrapper direc={direc}>
<Right>
<H2>{year}</H2>
<H2>{month}</H2>
<H2>{day}</H2>
</Right>
<Left>
<h2>{course}</h2>
<h3>{price}</h3>
</Left>
    </Wrapper>
    <Buttoncomp/>
</Container>
    )
}
export default Headercomp
const Container = Styled.div`
width:80%;
height:150px;
// background-color:black;
margin-left:70px;
margin-top:50px;
border-radius:7px;
border: silver solid 2.5px;
display:flex;
flex-direction:column

// justify-content:space-between;
// align-items:center;
`
const Wrapper = Styled.div`
width:90%;
height:100px;
background-color:white;
border-radius:7px;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:20px;
flex-direction:${({direc})=>direc}
`
const Right = Styled.div`
width:100px;
height:90px;
border-radius:7px;
background-color:black;
color:white

`
const Left = Styled.div`
width:250px;
height:100px;
// background-color:pink;
display:flex;
justify-content:space-between;
align-items:center;
`
const H2 = Styled.div`
font-size:22px;
// margin-left:30px;
display:flex;
flex-direction:column;
align-items:center
`
const H3 = Styled.div`

`