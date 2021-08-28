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

  export class BarChart extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Inflation',
            data: [1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 1, 2]
          }],
          options: {
            chart: {
              height: 190,
              type: 'bar',
            },
            colors: ['#F5B9CA'],
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "ml";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },    
            xaxis: {
              categories: ['00.00', '02.00', '04.00', '06.00', '08.00', '10.00', '12.00', '14.00', '16.00', '18.00', '20.00', '22.00'],
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: true,
                formatter: function (val) {
                  return val + "";
                }
              }
            
            },
            title: {
              text: 'Monthly Inflation in Argentina, 2002',
              floating: true,
              offsetY: 330,
              align: 'center',
              style: {
                color: '#444'
              }
            }
          },
        
        };
  }

  render() {
    return (
<Styled.Chart>
  <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={190} /> 
</Styled.Chart>);
}
} 