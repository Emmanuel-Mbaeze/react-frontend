import React from "react";
import styled from "styled-components";
import Firstcomp from "../Homescreen/Firstcomp";
import Pic from "../../img/1.jpg"
const Consume =()=>{

    return(
        <Container>
        <Wrapper>
        <Firstcomp
        image={Pic}
        // row="row-reverse"
        />
        </Wrapper>
                </Container>
                )
}
export default Consume
const Container = styled.div`
width:100%;
height: 100vh;
background: orange;
display: flex;
justify-content:center;
align-items:center;
`
const Wrapper = styled.div`
width:100%;
height: 100vh;
/* background: red; */
`