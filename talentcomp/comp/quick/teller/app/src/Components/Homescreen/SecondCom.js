import React from "react"
import styled from "styled-components"
import Pic from "../../img/quick1.png"
const Secondcomp=()=>{
return(
    <Cont>
    <Container>
        <Right>
<H2>Get paid securely how and when you want it</H2>
<H7>As with all our tools payments are centeal to the experience.Our suite of integrated tools saves your time,so you can focus on growing revenue and delivering exceptional service to your customers</H7>
<Righttwo>
<Rightone>
    <H5>cards</H5>
    <H5>USSD</H5>
    <H5>bank transfer</H5>
</Rightone>
<Rightone>
    <H5>QR</H5>
    <H5>paycode</H5>
    <H5>mobile money</H5>
</Rightone>
</Righttwo>
</Right>
<Logo src={Pic}/>
    </Container>
    </Cont>
)
}
export default Secondcomp
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
border-radius:20px;
margin-top:46px;
`
const H2 = styled.div`
font-size:39px;
color:#353C58;
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
const Righttwo = styled.div`
width:80%;
height:50px;
flex-direction:column;
display:flex;
justify-content:space-between;
`