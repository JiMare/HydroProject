import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';

const Styled = {
    ActuatorContainer: styled.div`
     display: flex;
     flex-wrap: wrap;
    `,
    Pump: styled.div`
    width: 50%;
    height: 200px;
    display: flex;
    `,
    Actuator: styled.div`
    width: 25%;
    `,
    PumpIcon: styled.img`
    width: 40%;
    `,
    ActIcon :styled.img`
    width: 5%;
    `,
    PumpInfo: styled.div`
    border: 3px solid #F5B9CA;
    border-radius: .3rem;
    background-color: rgba(180,180,180, 0.7);
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2px;
    `,
    ActInfo: styled.div`
    border: 3px solid #F5B9CA;
    border-radius: .3rem;
    display: flex;
    justify-content: space-around;
    background-color: rgba(180,180,180, 0.7);
    margin: 2px;
    `,
    Chart: styled.div`
    width: 100%;
    `
}

export const Actuators = (props) => {

  const actuators = props.data.filter(obj => {return obj.id[0] === 'a'});
  const pumps = props.data.filter(obj => {return obj.id[0] === 'p'});

    return (<div>
       <Styled.ActuatorContainer> 
         {actuators.map((obj) => (
           <Styled.Actuator>
              <Styled.ActInfo>
                  <h3>{obj.type}</h3>
                  <Styled.ActIcon src={'./images/icons/' + obj.type + '.svg'}  />
                  <p>{obj.value} {obj.unit}</p>
              </Styled.ActInfo>
              <Styled.Chart>
                <LineChart />
                </Styled.Chart>
           </Styled.Actuator>
         ))}
     {pumps.map((obj) => (
       <Styled.Pump key={obj.id}>
           <Styled.Chart>
           <BarChart />
           </Styled.Chart>
           <Styled.PumpInfo>
           <h3>{obj.type}</h3>
             <Styled.PumpIcon src={'./images/icons/' + obj.type + '.svg'}  />
           <p>{obj.value} {obj.unit}</p>
           </Styled.PumpInfo>
       </Styled.Pump>
     ))}
    </Styled.ActuatorContainer>
    </div>);
}