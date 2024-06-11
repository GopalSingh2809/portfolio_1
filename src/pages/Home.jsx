import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import image from "../images/hand-drawn-web-developers_23-2148819604.png"

const Salutation=styled.p`
    font-size:20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    margin: 10px 0px 0px 30px;
`
const Name=styled.h1`
    font-size: 40px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    margin: 10px 0px 0px 30px;
`
const Profile=styled.p`
    margin: 20px 0px 0px 30px;
    padding-top:5px;
    width: 200px;
    height: 30px;
    background-color: blue;
    text-align: center;
    font-weight: 500;
`
const Description=styled.p`
    width: 800px;
    font-size:20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 300;
    margin: 10px 0px 0px 30px;
    padding-top:20px ;
`
const Circle=styled.div`
    height:5px;
    width:5px;
    border:3px solid ;
    border-radius:50%;
    margin: 28px 0px 0px 30px;
`
const Line=styled.div`
    height:.5px;
    width:800px;
    border-style: solid;
    margin:-8px 0px 10px 40px;
`
const ImgWrapper=styled.div`
    position: absolute;
    right: 30px;
    top: 230px;

`

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Salutation>Hello !!!</Salutation>
      <Name>I'm Gopal Sharan Singh</Name>
      <Profile>Frontend Developer</Profile>
      <Circle></Circle>
      <Line></Line>
      <Description>
        As a Front-End Developer, I specialize in translating designs into functional, user-friendly     websites and applications. With a keen eye for detail and a passion for creating intuitive user experiences, I bridge the gap between design and technology.<br/><br/>
        My expertise lies in HTML, CSS, and JavaScript, the fundamental building blocks of web development. I am proficient in using CSS preprocessors like Sass or LESS, and libraries like jQuery. I have hands-on experience with front-end frameworks like React and Angular, which allow me to build complex, scalable applications with ease.<br/><br/>
        I understand the importance of responsive design and ensure that the websites I create function seamlessly across all devices. I stay updated with the latest trends and technologies in web development to ensure that my skills are current and relevant.
        </Description>
        <ImgWrapper>
            <img src={image} alt="" />
        </ImgWrapper>
        <Circle></Circle>
        <Line></Line>
    </div>
  )
}

export default Home
