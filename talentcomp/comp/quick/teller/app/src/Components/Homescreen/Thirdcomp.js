import React from "react"
import styled from "styled-components"
import Pic from "../../img/quick2.png"
const Thirdcomp=()=>{
return(
    <Container>
<Logo src={Pic}/>
        <Right>
<H2>Built to save time and get you paid faster</H2>
<H7>Send professional invoice ,track them in real time and accept payments online-all from one place.As with all our tools payments are centeal to the experience.Our suite of integrated tools saves your time,so you can focus on growing revenue and delivering exceptional service to your customers</H7>
<Rightone>
    <H5>Payment Links</H5>
    <H5>Invoices</H5>
    <H5>Subscrition</H5>
</Rightone>
</Right>
    </Container>
)
}
export default Thirdcomp

const Container = styled.div`
// background-color: #123456;
height:500px;
width:80%;
margin-left:120px;
display:flex;
justify-content:space-between;
flex-direction:row;
margin-top:50px;
`;
const Right = styled.div`
// background-color: grey;
height:400px;
width:40%;
margin-top:81px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const Logo = styled.img`
height:450px;
width:53%;
margin-top:46px;
`
const H2 = styled.div`
font-size:39px;
`
const H7 = styled.div`
font-size:16px;
color: grey;
`
const Rightone = styled.div`
width:80%;
display:flex;
justify-content:space-between;
flex-direction:row;
`
const H5 = styled.div`

`
// const Righttwo = styled.div`
// width:80%;
// height:50px;
// flex-direction:column;
// display:flex;
// justify-content:space-between;
// `