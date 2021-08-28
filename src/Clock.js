import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Styled = {
    CurrentTime : styled.h2`
    font-size: 3rem;
    font-family: 'Source Sans Pro', sans-serif;
    color: white;
    float: left;
    text-align: left;
    background-color: rgba(0,0,0, 0.7);
    color: white;
    padding: 0.4%;
    border-radius: 0.4rem;
    margin-left: 0.4%;
    word-spacing: 0.4rem;
    `,
    CurrentDate : styled.p`
    font-size: 2rem;
    margin-top: 1rem;
`
}

const getCurrentTime = () => {
  const now = new Date();
  return {
    day: now.getDay(),
    month: now.getMonth(),
    date: now.getDate(),
    year: now.getFullYear(),
    time: now.toLocaleTimeString()
  };
};

const CURRENT_TIME = getCurrentTime();

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


export const Clock = () => {
 
    const [currentTime, setCurrentTime] = useState(CURRENT_TIME)

    const countingSecond = () => {    
      setCurrentTime(getCurrentTime());      
    }

    useEffect(() => {
      const intervalID = setInterval(countingSecond, 1000);
      return () => clearInterval(intervalID)
      }, [])

    return (      
        <Styled.CurrentTime> {DAYS[currentTime.day]} {currentTime.time}
          <Styled.CurrentDate> {MONTHS[currentTime.month]} {currentTime.date}, {currentTime.year} </Styled.CurrentDate>
        </Styled.CurrentTime>      
      )
    }