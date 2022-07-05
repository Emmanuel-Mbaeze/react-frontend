import React from "react"
import styled from "styled-components"
import Pic from "../../img/quick3.png"
import Pic1 from "../../img/selling-icon.svg"
import Pic2 from "../../img/fee-icon.svg"
import Pic3 from "../../img/solutions-icon.svg"
const Fourthcomp =()=>{
    return(
        <Cont>
        <Container>
<Up>
<Up1>
    <H2>
    With Storefront You Now
Have Everything You Need to
Sell Online with ease
    </H2>
</Up1>
<Up2>
    <H7>
    Set up a fully-hosted online store in just minutes. The online
store was designed with you in mind, meaning you don't need
to hire any web designers or programmers to get started.</H7>
<H8>
Let’s get you started
    </H8>
</Up2>
</Up>
<Logo src={Pic}/>
<Down>
<Down1>
<Logos src={Pic1}/>
<Two>
<H3>Start Selling Online</H3>
</Two>
<Three>
<H7>Easily sell online and ship orders to
customers, offer in-shop pickup, or local
delivery—no matter what type of business
you have.</H7>
</Three>
</Down1>
<Down2>
<Logos src={Pic2}/>
<Two>
<H3>Ease Of Delivery</H3>
</Two>
<Three>
<H7>We give you the flexibility of handling your
own package delivery as well as provide
the option to intergate with our dedicated
logistics partners.</H7>
</Three>
</Down2>
<Down3>
<Logos src={Pic3}/>
<Two>
<H3>Built-In Payment Solutions</H3>
</Two>
<Three>
<H7>As with all of our tools, payments are central
to the experience. Even with online payments,
you benefit from our lower rates and fast
deposits.</H7>
</Three>
</Down3>
</Down>
        </Container>
        </Cont>
    )
}
export default Fourthcomp

const Cont  = styled.div`
height:1000px;
width:100%;
background-color:#F5FBFE;
margin-top:70px;
`
const Container = styled.div`
// background-color:#F5FBFE;
height:995px;
width:80%;
margin-left:120px;
display:flex;
justify-content:space-between;
flex-direction:column;
margin-top:50px;
`;
const Up = styled.div`
height:250px;
width:100%;
// background-color:red;
display:flex;
justify-content:space-between;
align-items:center;
`
const Logo = styled.img`
height:450px;
width:100%;
`
const Down = styled.div`
height:250px;
width:100%;
margin-top:50px;
display:flex;
justify-content:space-between;
`
const Up1 = styled.div`
height:250px;
width:49%;
display:flex;
align-items:center;
`
const Up2 = styled.div`
height:250px;
width:49%;
// background-color:blue;
display:flex;
flex-direction:column;
justify-content:center;
`
const H2 = styled.div`
font-size:39px;
`
const H7 = styled.div`
font-size:18px;
`
const H8 = styled.div`
font-size:18px;
margin-top:20px;
`
const Down1 = styled.div`
height:250px;
width:30%;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const Down2 = styled.div`
height:250px;
width:30%;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const Down3 = styled.div`
height:250px;
width:30%;
display:flex;
flex-direction:column;
justify-content:space-between;
ground-color:green;
`
const Logos = styled.img`
height:30px;
width:30px;
object-fit:contain;
`
const Two = styled.div`

`
const Three = styled.div`

`
const H3 = styled.div`
font-size:25px;
`