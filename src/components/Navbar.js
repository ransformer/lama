import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
height: 60px;
${mobile({height:"50px"})};
`
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
justify-content:space-between;
${mobile({padding:"10px 0px"})};
`

const Left = styled.div`
flex:1;
display: flex;
align-items: center;`

const Language= styled.span`
cursor: pointer;
${mobile({display:"none"})};
`

const SearhContainer=styled.div`
border:1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding:5px`

const Input= styled.input`
border:none;
outline:none;
${mobile({width:"50px"})};`

const Center = styled.div`flex:1;
text-align:center`

const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})};
`

const Right = styled.div`
flex:1; 
display: flex; 
align-items: center; 
justify-content:flex-end;
${mobile({ flex: 2, justifyContent: "flex-start" })}
`

const MenuItem= styled.div`
font-size: 14px;
cursor: pointer; 
margin-left: 25px;
${mobile({ fontSize:"12px"})};
${mobile({marginLeft:"1px"})};
`

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearhContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:"gray" , fontSize:16}}/>
                    </SearhContainer>
                </Left>
                <Center><Logo>LAMA.</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem><Badge badgeContent={5} color="primary">
                        <ShoppingCartOutlined color="action" />
                        </Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
