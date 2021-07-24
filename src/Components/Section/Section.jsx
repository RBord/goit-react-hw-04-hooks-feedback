import React from 'react';
import PropType from 'prop-types';
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

Title.propTypes = {
    title: PropType.string.isRequired,
}

