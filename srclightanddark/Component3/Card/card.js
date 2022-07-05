import React from 'react'
import style from 'styled-components'


const Card =({Icons, Titles, Contents, Buttons, color})=>{

    return(
        <Container style={{
            backgroundColor:color
        }}>
            <Wrapper>
                <IconTag src={Icons} alt="Icon Image" />
                <Title>{Titles}</Title>
                <Content>{Contents}</Content>
                <ButtonWrap>
            <Button>{Buttons}</Button>
                </ButtonWrap>
            </Wrapper>
        </Container>
    )
}

export default Card;

const Container = style.div`
width: 250px;
height: 450px;
// background: 
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = style.div`
width: 180px;
height: 330px;
// background: white;


`
const IconTag = style.img`
margin-top: 10px;
`
const Title = style.div`
margin-top: 20px;
font-size: 25px;
font-weight: 600;
color: #FFE8C6;
`
const Content = style.div`
margin-top: 20px;
font-size: 14px;
color: #FFE8C6;

`

const ButtonWrap = style.div`
margin-top: 40px;
width: 100%;
// background: blue;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify- content: center;
`
const Button = style.button`
// margin-top: 30px;
width: 100px;
height: 50px;
border-radius: 50px;
border: none;
background: #FFE8C6;
width: 150px;
color: #DF8A2F;
:hover{background:#14707C;
    width: 155px};
`