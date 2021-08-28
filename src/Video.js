import styled from 'styled-components';

const Styled = {
    Video : styled.img`
    height: 100%;
    width: auto;
    border: 3px solid green;
    `
}

export const Video = () => {
    return (
    <Styled.Video src="./images/plant.jpg" />
    );
}