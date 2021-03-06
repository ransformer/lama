import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ flexDirection: "column" })}
`

const ImgContainer = styled.div`flex:1;`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit:cover;
${mobile({ objectFit:"cover" ,height: "40vh" })}
`

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({ padding: "0px" })}
`

const Title = styled.h1`
font-weight: 200;
font-size: 40px;`

const Desc = styled.p`
margin: 20px 0px; 
font-weight: 200;
font-size: 20px;`

const Price = styled.span`
font-size: 40px;
font-weight: 200;`

const FilterContainer = styled.div`
width: 50%;
margin: 40px 0px;
display: flex;
justify-content:space-between;
${mobile({ flexDirection: "column" , width:"70%" })}
`

const Filter = styled.div`
display: flex;
align-items: center;`

const FilterTitle = styled.span`
font-size: 30px;
font-weight: 200;
margin-right: 10px;`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color:${props=>props.color};
margin-right: 10px;
cursor: pointer;`

const Select = styled.select`
padding: 8px;`

const Option = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const AmountContainer = styled.div`
display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
padding: 15px;
background-color:white;
border:2px solid teal;
border-radius:5px;
cursor: pointer;
font-size: 15px;

${mobile({ marginLeft: "70px" })}

&:hover{
    background-color: #e2eafc;
}

`

export default function Product() {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                        <Desc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo, consequat id
                            condimentum ac, volutpat ornare.
                        </Desc>
                        <Price>$ 20</Price>
                
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color= "black"/>
                        <FilterColor color= "darkblue"/>
                        <FilterColor color= "gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <Select>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>

                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
