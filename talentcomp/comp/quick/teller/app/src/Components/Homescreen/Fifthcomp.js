import React from "react"
import styled from "styled-components"
import Pic from "../../img/quick4.png"
import Pic1 from "../../img/icon-qr-code.svg"
import Pic2 from "../../img/icon-cash.svg"
import Pic3 from "../../img/icon-ussd.svg"
import Pic4 from "../../img/icon-cards.svg"
import Pic5 from "../../img/icon-transfer.svg"
const Fifthcomp=()=>{
return(
    <Container>
        <Right>
<H2>One Card Reader for
All Your Payment Needs</H2>
<H7>Introducing the one device for all your payment needs.
Whether you're accepting payments at your countertop
checkout or looking to accept payments on-the-go, the
lightweight and easy to transport Card Reader connects to an
array of devices and offers your business the flexibility to accept
any type of payment, wherever you are.</H7>
<H7>Payment modules available</H7>
<Rightone>
<Logoe src={Pic1}/>
<Logos src={Pic2}/>
<Logos src={Pic3}/>
<Logos src={Pic4}/>
<Logos src={Pic5}/>
</Rightone>
</Right>
<Logo src={Pic}/>
    </Container>
)
}
export default Fifthcomp

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
height:500px;
width:57%;
`
const H2 = styled.div`
font-size:36px;
color:#353C58;
`
const H7 = styled.div`
font-size:16px;
color: grey;
`
const Rightone = styled.div`
width:90%;
display:flex;
justify-content:space-between;
flex-direction:row;
`
const Logos = styled.img`
height:50px;
width:50px;
object-fit:contain;
`
const Logoe = styled.img`
height:40px;
width:40px;
object-fit:contain;
`
