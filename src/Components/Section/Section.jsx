import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
text-align: center;
`
const Section = ({title, children}) => (
    <section>
        <Title>{title}</Title>
        {children}
    </section>
)
export default Section;