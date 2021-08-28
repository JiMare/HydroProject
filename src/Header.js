import React from 'react';
import styled from 'styled-components';
import { Clock } from './Clock';
import { Video } from './Video';

const Styled = {
    Nav : styled.div`
    background-image: url('./images/flowers.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 2rem;
    font-family: 'Source Sans Pro', sans-serif;
    height: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center`,
    Title : styled.h1`
    font-size: 5rem;
    color: white;
    -webkit-text-stroke: 1px green;
    margin-left: 1rem;
    `,
}

export const Header = () => {
    
    return(
    <Styled.Nav>
        <Video />
        <Clock />
   <Styled.Title>Hydroponic Project</Styled.Title>
    </Styled.Nav>);
}