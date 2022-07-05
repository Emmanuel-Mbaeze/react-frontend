import React from 'react'
import styled from 'styled-components'
import Card from '../Card/card'
import sedan from '../images/icon-sedans.svg'
import luxury from '../images/luxury.svg'
import suvs from '../images/suvs.svg'

const Home =()=>{

  return(
    <Container>
        <CardWrapper>
        <Card Icons={sedan} Titles="SEDANS" Contents="Choose a Sedan for its affordability and excellent fuel economy. Ideal for cruising in te city or on your next road trip" Buttons="Learn More" color="#E28525"/>
        <Card Icons={suvs} Titles="SUVS" Contents="Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures" Buttons="Learn More" color="#14707C"/>
        <Card Icons={luxury} Titles="LUXURY" Contents="Cruise in the best car brands without the the bloated prices. Enjoy te enhanced comfort of a luxury rental and arrive in style" Buttons="Learn More" color="#00403F"/>
        
        </CardWrapper>
    </Container>
  )
}

export default Home;

const Container = styled.div`

`

const CardWrapper = styled.div`
width: 100%;
height: 100vh;
// background: blue;
display: flex;
justify-content: center;
align-items: center;

`