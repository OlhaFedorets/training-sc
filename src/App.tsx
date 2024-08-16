import React from 'react';
import './App.css';
import styled from "styled-components";
import image from "./assets/images/img.webp"

function App() {
    return (
        <div className="App">
            <Box>
                <MyCard>
                    <Img src={image}/>
                    <Headline>Headline</Headline>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <span>
                        <Btn>See more</Btn>
                        <Btn>Save</Btn>
                    </span>
                </MyCard>
            </Box>
        </div>
    );
}

export default App;

const MyCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    top: -317px;
    left: -409px;
    border-radius: 15px;
    background-color: white;
    `

const Img = styled.img`
    width: 280px;
    height: 170px;
    margin-top: 10px;
    margin-left: 10px;
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
    line-height: 19.36px;
    text-align: left;

`

const Text = styled.p`
    width: 260px;
    height: 40px;
    top: 239px;
    left: 20px;
    //gap: 0px;
    //opacity: 0px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
color: #ABB3BA;


`

const Btn = styled.button`
    background-color: #4E71FE;
    width: 86px;
    height: 30px;
    top: 298px;
    left: 20px;
    border-radius: 5px;
    opacity: 0px;
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: dimgrey;
`