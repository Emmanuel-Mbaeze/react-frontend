import React from "react"
import styled from "styled-components"
const Buttoncomp = ()=>{
return(
<Button>
Get Started
</Button>
)
}
export default Buttoncomp

const Button = styled.button`
background-color:silver;
width:100px;
height:40px;
border-radius:8px;
color:black;
border:none;
outline:none;
cursor:pointer;
margin-left:200px;
font-size:16px;
`