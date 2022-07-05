import React from 'react'
import styled from 'styled-components'
import {BiHappy} from 'react-icons/bi'
import {
    AiFillHome,
    AiFillRobot,
    AiFillFlag,
    AiFillProfile,
    AiFillVideoCamera,
    AiFillEye,
    AiFillFolderOpen,
} from 'react-icons/ai'

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Logohold>
                <AiFillRobot size="60px" color="#fff"/>
            </Logohold>

            <Navigator>
                <Navhold>
                    <Nav>
                        <AiFillHome size="25px" color="#fff"/>
                        <span>Home</span>
                    </Nav>
                    <Nav>
                        <AiFillFlag size="25px" color="#fff"/>
                        <span>Trending</span>
                    </Nav>
                    <Nav>
                        <AiFillProfile size="25px" color="#fff"/>
                        <span>For you</span>
                    </Nav>
                    <Nav>
                        <AiFillVideoCamera size="25px" color="#fff"/>
                        <span>Collections</span>
                    </Nav>
                    <Nav>
                        <AiFillEye size="25px" color="#fff"/>
                        <span>Watched</span>
                    </Nav>
                    <Nav>
                        <AiFillFolderOpen size="25px" color="#fff"/>
                        <span>Uploads</span>
                    </Nav>
                </Navhold>

                <Btnhold> 
                    <BiHappy size="25px" color="#fff"/>
                    <span>Login</span>
                </Btnhold>
            </Navigator>
        </Wrapper>
    </Container>
  )
}

export default Header;

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: blue;
`
const Wrapper = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* background: #f27f7f; */
`
const Logohold = styled.div``

const Navigator = styled.div`
display: flex;
width: 1080px;
display: flex;
justify-content: space-between;
`
const Navhold = styled.div`
display: flex;
width: 850px;
/* background: yellow; */
font-weight: 600;
justify-content: space-between;
`
const Nav = styled.div`
display: flex;
align-items: center;

span{
    margin: 5px;
    font-size: 23px;
    color: #fff;
}
`
const Btnhold = styled.button`
padding: 5px 25px;
outline: none;
background: transparent;
border: 5px solid #fff;
border-radius: 7px;
font-weight: 600;
font-size: 23px;
display: flex;
align-items: center;
span{
    margin-left: 4px;
    color: #fff;
}
`

