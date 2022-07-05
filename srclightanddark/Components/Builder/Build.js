import React from 'react'
import style from 'styled-components'

const Build =({Prices, Courses, Dates, swap})=>{

    return(
        <Building>
        
            <Box>
                <Boxwrap>
                <Box1 swap = {swap}>
                    <Date><h3>{Dates}</h3></Date>
                    <Course><h1>{Courses}</h1></Course>
                    <Price>{Prices}</Price>
               
                </Box1>
        <Button>Sign In</Button>

        </Boxwrap>
            </Box>
            
        
            
        </Building>
    )
}

export default Build;

const Building = style.div`
background: Black;
height: 350px;
width:650px;
display: flex;
align-items: center;
justify-content: center;
margin: 50px
`

const Contents = style.div`

`

const Box = style.div`

height: 300px;
width:600px;
background: white;
display:flex;
justify-content:space-around;
flex-direction:column;
border-radius: 10px
`


const Box1 = style.div`

border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction : ${({swap})=>swap}
`

const Date = style.div`
width: 100px;
Text-align: center;
background: red;
border-radius: 10px
`

const Course = style.div`
font-weight: bold;
font-size:25px
`

const Price = style.div`
font-weight: bold;
color: red
`
const Button= style.button`
width: 200px;
height:50px;
font-weight: bold;
font-size: 20px;
margin-left:250px;
background: #dfdfdf;
:hover{background:red;
width: 205px};
border-radius: 5px;
border: none;
`
const Boxwrap = style.div`

`