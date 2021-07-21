import React from 'react';
import styled from '@emotion/styled';

const Text = styled.p`
text-align: center;
`
const Notification = ({message}) => (
    <Text>{message}</Text>
)
export default Notification;