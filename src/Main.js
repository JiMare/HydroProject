import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Actuators } from './Actuators';
import { SensorContainer } from './SensorContainer';

const Styled = {
    MainPart : styled.main`
    width: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;   
    `,
    ButtonWrapper : styled.div`
    width: auto;
    height: 5vh;
    display: flex;
    margin-top: 0.7rem;
    margin-left: 0.3rem;
    `,
    Button : styled.button `
    width: 15rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius:  1rem 1rem 0rem 0rem;    
    border-bottom: #438F00;
    margin-right: 0.3rem;
    cursor: pointer;
    outline: none;
    background-color: ${props => props.active ? "#8fdb3d": "#C8C8C8"}
    `
}

export const Main = () => {

  const [sensorsVisible, setSensorsVisible] = useState(true);
  const [actuatorsVisible, setActuatorsVisible] = useState(false);
  
  const onShowSensors = () => {
    setSensorsVisible(true);
    setActuatorsVisible(false);  
  };

  const onShowActuators = () => {
    setActuatorsVisible(true);
    setSensorsVisible(false);   
  };

  const [data, setData] = useState([]);

  useEffect(() => {
     fetch('./data.json')
     .then((response) => response.json())
     .then((fetchedData) => setData(fetchedData));
  }, []);

  const sensorsData = data.filter(obj => {
    return obj.id[0] === 's';
    });
 
  const actuatorsData = data.filter(obj => {
    return obj.id[0] !== 's';
    }); 

  return (
    <Styled.MainPart>
      <Styled.ButtonWrapper>
        <Styled.Button onClick={onShowSensors} active={sensorsVisible} >Sensors</Styled.Button>
        <Styled.Button onClick={onShowActuators} active={actuatorsVisible} >Actuators</Styled.Button>
      </Styled.ButtonWrapper>
      
        {sensorsVisible && <SensorContainer data={sensorsData} /> }
        {actuatorsVisible && <Actuators data={actuatorsData} /> } 
      
    </Styled.MainPart>
  );
}