import React from 'react';
import PropType from 'prop-types';
import styled from '@emotion/styled';

const Text = styled.p`
text-align: center;
`
const Notification = ({message}) => (
    <Text>{message}</Text>
)
export default Notification;

Text.propTypes = {
    message: PropType.string.isRequired,
}