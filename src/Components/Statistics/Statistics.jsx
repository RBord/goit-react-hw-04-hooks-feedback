import React from "react";
import styled from "@emotion/styled";
import Section from "../Section/Section";
import { Container } from "../FeedbackOptions/FeedbackOptions";
const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    margin: 0 auto;
`
const TextTotal = styled.p`
border: 2px solid red;
display: inline-block;
padding: 5px 15px;
`;
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <Section title='Statistics'>
             <Container>
                <Div>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                </Div>
                <TextTotal>Total: {total}</TextTotal>
                <p>Positive feedback: {positivePercentage} %</p>
            </Container>
        </Section>
    </>
)
    
export default Statistics;