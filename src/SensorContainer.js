import React, {useState} from 'react'; 
import styled from 'styled-components';
import { LineChart } from './LineChart';

const Styled = {
    SensorContainer: styled.div`
     display: flex;
     flex-wrap: wrap;
    `,
    Sensor: styled.div`
    width: 50%;
    height: 200px;
    display: flex;
    `,
    Icon: styled.img`
    width: 40%;
    `,
    Info: styled.div`
    border: 3px solid #F5B9CA;
    border-radius: .3rem;
    background-color: rgba(180,180,180, 0.7);
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2px;
    `,
    Chart: styled.div`
    width: 100%;
    `
}

export const SensorContainer = (props) => {

    return (
    <Styled.SensorContainer> 
     {props.data.map((obj) => (
       <Styled.Sensor key={obj.id}>
           <Styled.Chart>
           <LineChart />
           </Styled.Chart>
           <Styled.Info>
           <h3>{obj.type}</h3>
           <Styled.Icon src={'./images/icons/' + obj.type + '.svg'}  />
           <p>{obj.value} {obj.unit}</p>
           </Styled.Info>
       </Styled.Sensor>
     ))}
    </Styled.SensorContainer>
    );
}