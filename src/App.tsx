import React from 'react';
import './App.css';
import styled from "styled-components";
import image from "./assets/images/img.webp"
import {Naming} from "./Components/Naming.styled";
import {MyCardStyled} from "./Components/MyCard.styled";
import {Img} from "./Components/Img.styled";
import {Headline} from "./Components/Headline.styled";
import {Text} from "./Components/Text.styled";
import {Btn} from "./Components/Btn.styled";


function App() {
    return (
        <div className="App">
            <Box>
                <Naming>Card</Naming>
                <MyCardStyled>
                    <Img src={image}/>
                    <Headline>Headline</Headline>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <span>
                        <Btn color={"#4E71FE"} fontColor={"white"}>See more</Btn>
                        <Btn color={"white"} fontColor={"#4E71FE"}>Save</Btn>
                    </span>
                </MyCardStyled>
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`