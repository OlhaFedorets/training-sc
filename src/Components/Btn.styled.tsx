import styled from "styled-components";

type BtnPropsType = {
    color?: string
    fontColor?: string
}

export const Btn = styled.button<BtnPropsType>`
    background-color: ${props => props.color};
    width: 86px;
    height: 30px;
    top: 298px;
    margin-left: 20px;
    margin-top: 5px;
    border-radius: 5px;
    border: 2px solid #4E71FE;
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 500;
    color: ${props => props.fontColor};
`