import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const Styled = {
  Chart: styled.div`
  height: 200px;
  border: 2px solid grey;
  border-radius: .2rem;
  margin: 2px;
  `
}

export class LineChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            series: [{
                name: "Desktops",
                data: [10, 41, 55, 45, 30, 62, 69, 91, 200]
            }],
            options: {
              chart: {
                height: 190,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              colors: ['#8fdb3d'],
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['00.00', '02.00', '04.00', '06.00', '08.00', '10.00', '12.00', '14.00', '16.00', '18.00', '20.00', '22.00'],
              }
            },
        };
    }
        render() {
            return (
        <Styled.Chart>
           <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={190}/> 
        </Styled.Chart>);
        }
}   
    
