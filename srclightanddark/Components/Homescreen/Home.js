import React from 'react'
import styled from 'styled-components'
import Building from '../Builder/Build'

const Home =()=>{

 return(
    <HomeScreen>
        <Building Prices= "$150,000" Courses="Full Stack" Dates="26 December 2022"/>
        <Building Prices= "$100,000" Courses="Back End" Dates="20 January 2022" swap = "row-reverse"/>
        <Building Prices= "$120,000" Courses="Front End" Dates="2 March 2022"/>
    </HomeScreen>
    
 )
}

export default Home;

const HomeScreen = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`