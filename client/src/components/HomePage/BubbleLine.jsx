import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BubbleLine = ({ bubbleData, positionData }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartref = chartRef.current.getContext('2d');

        // Calculate minimum and maximum values for X and Y axes
        const minX = Math.min(...bubbleData.map(data => data.x), ...positionData.map(data => data.x)) - 20;
        const minY = Math.min(...bubbleData.map(data => data.y), ...positionData.map(data => data.y)) - 20;

        const maxX = Math.max(...bubbleData.map(data => data.x), ...positionData.map(data => data.x)) + 20;
        const maxY = Math.max(...bubbleData.map(data => data.y), ...positionData.map(data => data.y)) + 20;

        // Find the minimum intensity of the bubbleD    ata
        const minBubbleIntensityX = bubbleData.find(data => data.x === minX)?.intensity || 0;
        const minBubbleIntensityY = bubbleData.find(data => data.y === minY)?.intensity || 0;


        chartInstance.current = new Chart(myChartref, {
            type: 'bubble',
            data: {
                datasets: [
                    {
                        label: 'Obstacle',
                        data: bubbleData,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                    },
                                                            // {
                    //     label: 'Path',
                    //     data: lineData,
                    //     // type: 'line',
                    //     borderColor: 'rgba(54, 162, 235, 0.6)',
                    //     fill: false,
                    // },
                    {
                        label: 'Positions',
                        data: positionData,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)'
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        title: {
                            display: false,
                            text: 'Bubble Y-Axis'
                        },
                        suggestedMax: maxY,
                        suggestedMin: minY - minBubbleIntensityY // Adjust suggestedMin for Y-axis
                    },
                    x: {
                        title: {
                            display: false,
                            text: 'Bubble X-Axis'
                        },
                        suggestedMax: maxX,
                        suggestedMin: minX - minBubbleIntensityX // Adjust suggestedMin for X-axis
                    }
                },
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 20,
                        bottom: 20
                    }
                }
            }
        });
    }, [bubbleData, positionData]);

    return (
        <canvas ref={chartRef} />
    )
}

export default BubbleLine;
