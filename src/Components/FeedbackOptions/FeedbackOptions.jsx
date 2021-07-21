import React from 'react';
import Section from '../Section/Section';
import styled from '@emotion/styled';

export const Container = styled.div`
text-align:center;
`
const Button = styled.button`
    margin-left: 20px;
    border-radius: 10px;
    border: 1px solid black;
    padding: 5px 10px;
`
const FeedbackOptions = ({incrementGood, incrementNeutral, incrementBad }) => (
    <>
        <Section title='Please leave feedback'>
            <Container>
                <Button type='button' onClick={incrementGood} name='good'>Good</Button>
                <Button type='button' onClick={incrementNeutral} name='neutral'>Neutral</Button>
                <Button type='button' onClick={incrementBad} name='bad'>Bad</Button>
            </Container>
        </Section>
    </>
)
export default FeedbackOptions;