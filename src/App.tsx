import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Box>
          <MyCard>
<Btn>See more</Btn>
<Btn>Save</Btn>
          </MyCard>
      </Box>
    </div>
  );
}

export default App;

const MyCard = styled.div`
    display: flex;
    width: 300px;
    height: 350px;
    top: -317px;
    left: -409px;
    gap: 0px;
    border-radius: 15px;
    opacity: 0px;
background-color: white;
`

const Btn = styled.button`
    background-color: #4E71FE;
    width: 86px;
    height: 30px;
    top: 298px;
    left: 20px;
    gap: 0px;
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