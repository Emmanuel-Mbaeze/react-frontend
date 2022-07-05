import React from "react";
import Styled from"styled-components"
import Headercomp from "../Header/Header";
const Firstcomp=()=>{
    return(
<Container>
    <Headercomp
year="2022"
month="December"
day="2"
course="react js"
price="$30.0"
    />
    <Headercomp
    year="2022"
    month="July"
    day="26"
    course="phython"
    price="$50.0"
    direc="row-reverse"
    />
    <Headercomp
    year="2020"
    month="October"
    day="12"
    course="algorithm"
    price="$100.0"
    />
</Container>
    )
}
export default Firstcomp
const Container = Styled.div`
width:100%;
height:100vh;
// background-color:red;
`
