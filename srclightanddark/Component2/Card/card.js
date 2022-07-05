import React from 'react'
import style from 'styled-components'

const Card =({Titles, Descriptions,icon, altmessage, change})=>{

  return(
    <Container change={change}>
        <Wrapper>
            <Contents>
                <Title>{Titles}</Title>
                <Description>{Descriptions}</Description>
            </Contents>
            <Icon>
            <img src={icon} alt={altmessage}/>
            </Icon>
        </Wrapper>
    </Container>
  )
}

export default Card;

const Container = style.div`
width: 300px;
height: 200px;
background: #eeee;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
:hover{background: #ffffff;
  width: 310px};
border-top: ${({change})=>change};
box-shadow: rgba(3,102,214,0.3) 0px 0px 10px 5px;
`
const Wrapper = style.div`
width:90%;
height:80%;
// background: white
`
const Contents = style.div`
margin-bottom: 3px
`
const Icon = style.div`
width: 100%;
// background: blue;
display: flex;
justify-content: end;

img{
  width: 40px;
  height: 40px;
}
`;
const Title = style.div`
font-weight: 700;
font-size: 20px;
margin-bottom: 10px;

`
const Description = style.div`
font-size: 12px;
color: #aaaaaa
`
