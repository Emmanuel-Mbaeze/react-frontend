import React from 'react'
import style from 'styled-components'
import up from './images/icon-up.svg'

const Build =({Icons, change, Titles, Days})=>{

    return(
        <Container change= {change}>
            <First><IconTag src={Icons} alt="Iconic"/><User>@nathanf</User></First>
            <Title>{Titles}</Title>
            <Description>F O L L O W E R S</Description>
            <Second><TodayTag src={up} alt=""/><Today>{Days}</Today></Second>
        </Container>
    )
}

export default Build;

const First = style.div`
width: 100%;
height: 30%;
// background: aqua;
display: flex;
justify-content: center;
align-items: center
`
const Second = style.div`
width: 100%;
height: 35%;
// background: aqua;
display: flex;
justify-content: center;
align-items: center
`
const Container = style.div`
width: 260px;
height: 230px;
background: #F0F3FA;
border-top: ${({change})=> change};
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
`
const IconTag = style.img`
width: 20px;
height: 20px;`
const User = style.span`
font-weight: bold;
margin-left: 5px;
`
const Title = style.div`
font-weight: 700;
font-size: 40px;
`
const Description = style.div`
font-size: 15px;
font-weight: 100;
// margin-top: 5px;
`
const TodayTag = style.img`
width: 13px;
height: 13px;
`
const Today = style.span`
font-weight: bold;
font-size: 15px;
color: green;
margin-left: 3px;
`