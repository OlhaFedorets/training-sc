import React from 'react';
import './App.css';
import styled from "styled-components";
import image from "./assets/images/img.webp"
type BtnPropsType = {
    color?: string
    fontColor?: string
}

function App() {
    return (
        <div className="App">
            <Box>
                <Naming>Card</Naming>
                <MyCard>
                    <Img src={image}/>
                    <Headline>Headline</Headline>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <span>
                        <Btn color={"#4E71FE"} fontColor={"white"}>See more</Btn>
                        <Btn color={"white"} fontColor={"#4E71FE"}>Save</Btn>
                    </span>
                </MyCard>
            </Box>
        </div>
    );
}

export default App;

const Naming = styled.div`
   margin-top: 50px;
    margin-left: 29px;
    color: #ABB3BA;
    font-family: Inter, sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
`

const MyCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    top: -317px;
    left: -409px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 4px 20px 5px #0000001A;
    `

const Img = styled.img`
    width: 280px;
    height: 170px;
    margin: 10px;
    border-radius: 10px;
`

const Headline = styled.h1`
    width: 70px;
    height: 19px;
    top: 200px;
    margin-left: 20px;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    text-align: left;

`

const Text = styled.p`
    width: 260px;
    height: 40px;
    top: 239px;
    margin-left: 20px;
    //gap: 0px;
    //opacity: 0px;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #ABB3BA;


`

const Btn = styled.button<BtnPropsType>`
    background-color: ${props => props.color};
    width: 86px;
    height: 30px;
    top: 298px;
    margin-left: 20px;
    border-radius: 5px;
    border: 2px solid #4E71FE;
    //opacity: 0px;
    font-family: Inter, sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: ${props => props.fontColor};
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
   `