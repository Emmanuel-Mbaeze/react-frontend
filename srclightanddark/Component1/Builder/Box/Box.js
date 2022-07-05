import React from 'react'
import style from 'styled-components'
import up from '../images/icon-up.svg'

const Box =({Titles, Icons, Numbers, Percentage})=>{

    return(
        <Container>
            <First>
            <Page>{Titles}</Page><Image src={Icons} alt="Icons"/>
            </First>
            <Second>
            <Number>{Numbers}</Number>
            <Wrapper><Image2 src={up} alt=""/><Page2>{Percentage}</Page2></Wrapper>
            </Second>
        </Container>
    )
}

export default Box;

const Container = style.div`
width: 230px;
height: 130px;
background: #dddd;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const First = style.div`
width: 80%;
height: 30px;
// background: aqua;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`
const Page = style.div`
margin-top: 10px;
font-weight: 500;
font-size: 15px;
`
const Image = style.img`
margin-top: 10px;
`
const Second = style.div`
width: 80%;
height: 50%;
// background: aqua;
display: flex;
justify-content: space-between;
`
const Number = style.span`
font-weight: 500;
font-size: 40px;
`
const Page2 = style.div`
`
const Image2 = style.img`
width: 20px;
height: 20px;
`
const Wrapper = style.div`
width: 50%;
// background: blue;
display: flex;
justify-content: end;
align-items: end;
margin-bottom: 20px;
`