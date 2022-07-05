import React from 'react'
import style from 'styled-components'
import Card from '../card'
import pic from '../images/4.png'
import iconic from '../images/5.png'
import Mom from '../images/Moms Icon.png'
import Parent from '../images/parents Icon.webp'


const Props =()=>{

  return(
    <Container>
      <Card icon={pic} Titles="Supervison" Descriptions="This is the phase that requires an agent to work assiduously to ensure they get the intended target by closely watching and monitoring other aspect of company." change="5px solid blue"/>
      <DualCard>
        <Card icon={iconic} Titles="Management" Descriptions="I know wetin I wan write as a content for this card, but I just had to do something make the card no go look empty because of lack of write-ups. Anyway this one go serve sha." change="5px solid red"/>
        <Card icon={Parent} Titles="Cordination" Descriptions="See as I just dey find sweet sweet Titles for my cards. Even though developing a description text for the heading no dey easy; but this my comments dey help out." change="5px solid yellow"/>
      </DualCard>
      <Card icon={Mom} Titles="Engagement" Descriptions="wahala choke. I just dey pity for those wey decide to read the content of my card; them go dey surprise wetin carry enangement eneter an official card. Anyway all join." change="5px solid green"/>
    </Container>
  )
}

export default Props;

const Container = style.div`
width: 100%;
height: 100vh;
// background: red;
display:flex;
align-items: center;
justify-content: center;
`
const DualCard = style.div`
width: 350px;
height: 450px;
// background: white;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
`