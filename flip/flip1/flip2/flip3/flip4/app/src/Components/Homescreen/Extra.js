import React from "react"
import Styled from "styled-components"
import Card from "../Header/Header"
import Pic from "../../img/2.svg"
import Pic1 from "../../img/3.svg"
import Pic2 from "../../img/1.svg"
const Extra=()=>{
  return(
    <Container>
    <Wrapper>
<Card
background= "yellow"
title="SEDANS"
para="Nonumy legimus oportere et vis, nam te paulo solet, decore graeci equidem ex per.adversarium te nec Eum te discere accusam decore graeci equidem."
butt="see more"
avr={Pic}
direc="orange"
colour="orange"
tl="6px"
bl="6px"
/>
<Card
title="SUVS"
para="Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis te zril urbanitasdecore graecibique voluptatibus  equidem scribentur adversarium te nec. 
"
butt="see more"
avr={Pic1}
direc="green"
colour="green"
/>
<Card
title="LUXURY"
para="Eu audire impetus ius. Ubique voluptatibus ex pro. An vero senserit qui, vim te latine volutpat, adversarium te necte impetus ius meliore persecuti. "
butt="see more"
avr={Pic2}
direc="#123456"
colour="#123456"
tr="6px"
br="6px"
/>
    </Wrapper>
</Container>
  )
}
export default Extra
const Container = Styled.div`
width:100%;
height:100vh;
/* background:gold; */
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`
const Wrapper = Styled.div`
width:82%;
height:81%;
/* background:brown; */
display:flex;
justify-content:center;
align-items:center;
`