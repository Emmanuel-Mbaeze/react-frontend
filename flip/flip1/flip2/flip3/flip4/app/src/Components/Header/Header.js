import React from "react"
import Styled from "styled-components"
const Card=({title, background, para,butt,avr,direc,colour,tl,tr,bl,br})=>{

	return(
<Container direc={direc}
tl={tl}
tr={tr}
bl={bl}
br={br}
>
<Wrapper >
	<Logo src={avr}/>
<Title>
{title}
</Title>
<Para>
{para}
</Para>
<Button  colour={colour}>
{butt}
</Button>
</Wrapper>
</Container>
	)
}
export default Card
const Container = Styled.div`
width:280px;
height:350px;
border-top-left-radius:${({tl})=>tl};
border-top-right-radius:${({tr})=>tr};
border-bottom-left-radius:${({bl})=>bl};
border-bottom-right-radius:${({br})=>br};
background:${({direc})=>direc};
display:flex;
justify-content:center;
align-items:center;
font-family:arvo;
`
const Wrapper = Styled.div`
width:195px;
height:300px;
border-radius:6px;
/* background:silver; */
`
const Logo = Styled.img`
width:50px;
/* height:40px; */
/* obje */
margin-bottom:20px;
`
const Title = Styled.div`
font-size:22px;
font-weight:600;
margin-bottom:28px;
color:white;
`
const Para = Styled.div`
font-size:10px;
font-weight:400;
margin-bottom:80px;
color:white;
`
const Button = Styled.button`
width:100px;
padding: 12px 20px;
border-radius:100px;
border:none;
outline:none;
color:${({colour})=>colour};
`
