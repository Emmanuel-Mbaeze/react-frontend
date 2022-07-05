import React from 'react'
import style from 'styled-components'
import Build from '../Build'
import Boxes from '../Box/Box'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import youtube from '../images/youtube.svg'

const Home =()=>{

    return(
        <Container>
            <Section1>
            <Heading>
            <First>
                <BoldText>Social Media Dashboard</BoldText>
                <Text>Total Followers: 23,004</Text>
            </First>
            <Dark>Dark Mode</Dark>
            </Heading>
            <Buildwrap>
                <Build Icons={facebook} change="5px solid blue" Titles="1987" Days="12 Days"/>
                <Build Icons={twitter} change="5px solid blue" Titles="1044" Days="99 Days"/>
                <Build Icons={instagram} change="5px solid #F7A970" Titles="11k" Days="1099 Days"/>
                <Build Icons={youtube} change="5px solid #A71130" Titles="8239" Days="144 Days"/>
            </Buildwrap>
            </Section1>

            <Section2>
                <SecContent>
                <SecText>Overview - Today</SecText>
                </SecContent>
                <Boxholders>
                <BoxHolder1>
                <Boxes Icons={facebook} Titles="Page Views" Numbers="87" Percentage="3%"/>
                <Boxes Icons={facebook} Titles="Likes" Numbers="52" Percentage="2%"/>
                <Boxes Icons={instagram} Titles="Likes" Numbers="5462" Percentage="2257%"/>
                <Boxes Icons={instagram} Titles="Profile Views" Numbers="52k" Percentage="1375%"/>
            </BoxHolder1>
            <BoxHolder2>
                <Boxes Icons={twitter} Titles="Retweets" Numbers="117" Percentage="117%"/>
                <Boxes Icons={twitter} Titles="Likes" Numbers="507" Percentage="507%"/>
                <Boxes Icons={youtube} Titles="Likes" Numbers="107" Percentage="107%"/>
                <Boxes Icons={youtube} Titles="Total Views" Numbers="1407" Percentage="1407%"/>
            </BoxHolder2>
                </Boxholders>
            </Section2>
        </Container>
    )
}

export default Home;

const Container = style.div`
width: 100%;
height: 100vh;
// background: #F8F9FE;

`

const Section1 = style.div`
background: #F8F9FE;
width: 100%;
height: 50vh;
`

const Buildwrap = style.div`
width: 100%;
height: 25%;
// background:#F8F9FE;
display: flex;
justify-content: space-evenly;

`

const First = style.div`
margin-left: 40px;
`
const BoldText = style.div`
margin-top: 20px;
font-weight: 700;
font-size: 20px;
`
const Text = style.div`
font-weight: 400;
font-size: 15px;
`
const Dark = style.div`
margin-right: 60px;
margin-top: 30px;
font-weight: 500;
font-size: 15px;
`
const Heading = style.div`
width: 100%;
height: 80px;
display: flex;
// background: #dddd;
justify-content: space-between;
`
const Boxholders = style.div`
width: 100%;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: space-around;
// background: #dddd;
`
const BoxHolder1 = style.div`
width: 100%;
// height: 30%;
background: white;
display: flex;
justify-content: space-around;
align-items: center;
`

const BoxHolder2 = style.div`
width: 100%;
// height: 30%;
background: white;
display: flex;
justify-content: space-around;
align-items: center;
`
const Section2 = style.div`
width: 100%,
// height: 50vh;

`

const SecContent = style.div`
width: 100%;
height: 80px;
display: flex;
align-items: end;
`
const SecText = style.div`
width: 80%;
height: 50px;
// background: aqua;
margin-left: 40px;
display: flex;
align-items: center;
font-weight: 700;
font-size: 25px;
`

