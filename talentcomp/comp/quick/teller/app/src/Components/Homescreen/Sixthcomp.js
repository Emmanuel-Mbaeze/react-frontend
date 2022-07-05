import React from "react"
import styled from "styled-components"
import Buttoncomp from "./ButtonComp"
import Pic from "../../img/quick5.png"
const Sixthcomp=()=>{
return(
    <Cont>
    <Container>
    <Logo src={Pic}/>
        <Right>
<H2>We’re Here to
Help You Get Started.</H2>
<H7>Connect with our Sales team for one-on-one
assistance with getting started.</H7>
<Buttoncomp/>
<H7>We’ll call you within one business day, between 9 a.m. and
5 p.m. in your time zone. If we can’t reach you, we’ll send an
email with a phone number to call us back.</H7>
</Right>
    </Container>
    </Cont>
)
}
export default Sixthcomp
const Cont  = styled.div`
height:540px;
width:100%;
background-color:#F5FBFE;
`
const Container = styled.div`
// background-color:#F5FBFE;
height:500px;
width:80%;
margin-left:120px;
display:flex;
justify-content:space-between;
flex-direction:row;
margin-top:50px;
`;
const Right = styled.div`
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
border-top-left-radius:50px;
border-bottom-right-radius:50px;
margin-top:46px;
`
const H2 = styled.div`
font-size:36px;
color:#353C58;
`
const H7 = styled.div`
font-size:16px;
color: grey;
`

