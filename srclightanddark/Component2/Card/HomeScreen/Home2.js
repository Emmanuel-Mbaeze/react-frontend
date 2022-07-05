import React from 'react'
import style from 'styled-components'
import Props from '../Props/props'

const Home =()=>{

  return(
    <MainContainer>
        <Container>
                <Text>
                <First>Reliable, efficient delivery</First>
                <Second>Powered by Technology</Second>
                 <Third>Our Artificial Intelligengence powered tools use millions of project data points to ensure that your project is successful</Third>
                </Text>
            <Props/>
        </Container>
    </MainContainer>
  )
}

export default Home;

const MainContainer = style.div`
width: 100%;
height: 100vh;
// background: black;
display: flex;
justify-content: center;
align-items: center;
`
const Container = style.div`
width: 80%;
height: 95vh;
background: #d7dce6;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
box-shadow: #00000059 0px 5px 15px 15px;
`

const First = style.div`
font-size: 20px;
color: #212222;
`
const Second = style.div`
font-size: 22px;
font-weight: 700;
`
const Third = style.div`
font-size: 12px;
`

const Text = style.div`
margin-top: 10px;
width: 100%;
height: 110px;
// background: blue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`