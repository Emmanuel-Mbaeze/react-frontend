import React from "react";
import styled from "styled-components"
import Pic1 from "../../img/multi-choice.png"
import Pic2 from "../../img/oando.png"
import Pic3 from "../../img/dominos.png"
import Pic4 from "../../img/konga.png"
import Pic5 from "../../img/betking.png"
const Extra =()=>{
return(
    <Container>
<Text>
<H5>TRUSTED BY BRANDS YOU TRUST</H5>
</Text>
<Rightone>
<Logos src={Pic1}/>
<Logos src={Pic2}/>
<Logos src={Pic3}/>
<Logos src={Pic4}/>
<Logo src={Pic5}/>
</Rightone>
  
    </Container>
)
}
export default Extra

const Container = styled.div`
width:40%;
height:90px;
margin-left:370px;
margin-top:50px;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const Text = styled.div`
width:100%;
height:30px;
display:flex;
justify-content:center;
`
const Rightone = styled.div`
width:100%;
height:54px;
display:flex;
justify-content:space-between;
flex-direction:row;
`


const H5 = styled.div`
font-size:17px;
`
const Logo = styled.img`
height:37px;
width:37px;
object-fit:contain;
`
const Logos = styled.img`
height:50px;
width:50px;
object-fit:contain;
`