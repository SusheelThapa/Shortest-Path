import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BubbleLine = ({ bubbleData, lineData }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Corrected typo: 'destroy' instead of 'destory'
        }

        const myChartref = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartref, { // Corrected typo: 'Chart' instead of 'chartInstance'
            type: 'bubble',
            data: {
                datasets: [
                    {
                        label: 'Bubble Dataset',
                        data: bubbleData,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                    },
                    {
                        label: 'Line Dataset',
                        data: lineData,
                        type: 'line',
                        borderColor: 'rgba(54, 162, 235, 0.6)',
                        fill: false,
                    },
                ]
            },
            options: {
                scales: {
                    y: {
                        title: {
                            display: false,
                            text: 'Bubble Y-Axis'
                        }
                    },
                    x: {
                        title: {
                            display: false,
                            text: 'Bubble X-Axis'
                        }
                    }
                }
            }
        });
    }, [bubbleData,lineData]);
    return (
        <canvas ref={chartRef} />
    )
}

export default BubbleLine