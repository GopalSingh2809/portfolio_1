import React from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Heading=styled.h1`
    margin-left: 30px ;
    font-size: 30px;
    margin-right: 100px;
`;
const LinkWrapper=styled.ul`
    list-style: none;
    display: flex;
    justify-items: center;
    gap:50px;
`;
const Links=styled.li`
    font-size: 18px;
    font-weight: 500;
`
const Circle=styled.div`
    height:5px;
    width:5px;
    border:3px solid ;
    border-radius:50%;
    margin: 0px 0px 0px 100px;
`
const Line=styled.div`
    height:.5px;
    width:300px;
    border-style: solid;
`
const Navbar = () => {
  return (
    <Wrapper>
      <Heading>Portfolio</Heading>
      <LinkWrapper>
        <Links>Home</Links>
        <Links>About Me</Links>
        <Links>Experience</Links>
        <Links>Projects</Links>
        <Links>Contact me</Links>
      </LinkWrapper>
      <Circle></Circle>
      <Line></Line>
    </Wrapper>
  )
}

export default Navbar;
