import React from "react"
import styled from "styled-components"
const Firstcomp=({image,row})=>{
    return(
        <Container>
<Wrapper row={row}>
<One>
<Logo src={image}/>
</One>
<Two>
<Title>
SEDANS
</Title>
<Para>
Nonumy legimus oportere et vis, nam te paulo solet, decore graeci equidem ex per.adversarium te nec Eum te discere accusam decore graeci equidem
</Para>
<Button >
go back
</Button>

</Two>
</Wrapper>
        </Container>
    )
}
export default Firstcomp
const Container = styled.div`
width:100%;
height: 100vh;
/* background: pink; */
display: flex;
justify-content:center;
align-items:center;
`
const Wrapper = styled.div`
width:80%;
height: 80vh;
/* background: blue; */
display: flex;
flex-direction: ${({row})=>row};
justify-content:space-between;
align-items:center;
`
const One = styled.div`
width:49%;
height: 70vh;
/* background: brown; */
display: flex;
justify-content:center;
align-items:center;
`
const Two = styled.div`
width:40%;
height:60vh;
/* background: black; */
display: flex;
flex-direction:column;
justify-content:center;
/* align-items:center; */

`
const Logo = styled.img`
width: 49%;
border-radius: 400%;
/* object-fit:contain; */
`
const Button = styled.button`
padding: 12px 20px;
border-radius:100px;
border:none;
outline:none;
margin-top:98px;
width: 100px;
:hover {
		background-color: transparent;
		border: 1px solid gray;
		color: white;
	}
`
const Title=styled.div`
color: white;
font-size:22px;
font-weight:600;
margin-bottom:28px;
`
const Para = styled.div`
color: white;
font-size:20px;
font-weight:400;
/* margin-bottom:80px; */
margin-top:10px;
`