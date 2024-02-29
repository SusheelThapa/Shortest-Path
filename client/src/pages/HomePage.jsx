import React, { useEffect, useState } from 'react';
import BubbleLine from '../components/HomePage/BubbleLine';

const HomePage = () => {
    const [obstacles, setObstacles] = useState([
        // { x: 55, y: 20, r: 10 },
        // { x: 25, y: 10, r: 20 },
        // { x: 35, y: 25, r: 15 }
    ]);
    const [newObstacle, setNewObstacle] = useState({ x: '', y: '', r: '' });

    const [startingPosition, setStartingPosition] = useState({ x: '0', y: '0', r: '8' });
    const [endPosition, setEndPosition] = useState({ x: '0', y: '0', r: '8' });

    const [lineData, setPositions] = useState([
        startingPosition,
        { x: 10, y: 20 },
        { x: 15, y: 10 },
        { x: 30, y: 25 },
        endPosition,
    ])
    
    const handleObstacleChange = (e) => {
        const { name, value } = e.target;
        setNewObstacle({ ...newObstacle, [name]: value });
    }


    const handleAddData = () => {
        if (newObstacle.x && newObstacle.y && newObstacle.r) {
            setObstacles([...obstacles, newObstacle]);
            setNewObstacle({ x: '', y: '', r: '' });
        } else {
            alert('Please fill in all fields');
        }
    }

    const handleDelete = (index) => {
        const updatedObstacles = obstacles.filter((_, i) => i !== index);
        setObstacles(updatedObstacles);
    }

    const handleGetShortestPath = () =>{

    }

    return (
        <>

            <div className='grid md:grid-cols-2'>
                <div className='flex justify-center items-center flex-col md:p-10'>
                    <div className="w-full p-10">
                        <h1 className='text-3xl text-blue-500 font-bold text-center mb-5'>Positions</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
                            {/* Starting Position Form */}
                            <form className="col-span-1 space-y-4">
                                <h2 className='text-xl text-center text-gray-700 font-semibold mb-2'>Starting Position</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-1">
                                            X Coordinate:
                                            <input
                                                type="number"
                                                name="xStart"
                                                value={startingPosition.x}
                                                onChange={(e) => setStartingPosition({ ...startingPosition, x: e.target.value })}
                                                className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block mb-1">
                                            Y Coordinate:
                                            <input
                                                type="number"
                                                name="yStart"
                                                value={startingPosition.y}
                                                onChange={(e) => setStartingPosition({ ...startingPosition, y: e.target.value })}
                                                className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </form>

                            {/* Destination Position Form */}
                            <form className="col-span-1 space-y-4">
                                <h2 className='text-xl text-center text-gray-700 font-semibold mb-2'>Destination Position</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-1">
                                            X Coordinate:
                                            <input
                                                type="number"
                                                name="xEnd"
                                                value={endPosition.x}
                                                onChange={(e) => setEndPosition({ ...endPosition, x: e.target.value })}
                                                className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block mb-1">
                                            Y Coordinate:
                                            <input
                                                type="number"
                                                name="yEnd"
                                                value={endPosition.y}
                                                onChange={(e) => setEndPosition({ ...endPosition, y: e.target.value })}
                                                className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <h1 className='text-3xl text-blue-500 font-bold'>Obstacles</h1>
                    {obstacles.length == 0 &&
                        <>
                            <div className='text-gray-500 mt-5'>No obstacles available to display.</div>
                        </>}
                    {obstacles.map((obstacle, index) => (
                        <>
                        <div key={index} className='rounded-lg p-4 mb-4 md:flex md:items-center md:justify-between md:gap-4'>
                            <div className='md:flex md:gap-4 md:flex-1 md:items-center'>
                                <h1 className='text-xl md:text-lg font-semibold'>X-coordinate: <span className='text-red-800'>{obstacle.x}</span></h1>
                                <h1 className='text-xl md:text-lg font-semibold'>Y-coordinate: <span className='text-red-800'>{obstacle.y}</span></h1>
                                <h1 className='text-xl md:text-lg font-semibold'>Intensity: <span className='text-red-800'>{obstacle.r}</span></h1>
                            </div>
                            <button className='bg-red-500 text-lg md:text-base text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors' onClick={() => { handleDelete(index) }}>Delete</button>
                        </div>
                        </>
                    ))}


                    <div className='mt-15 px-5'>
                        <h1 className='text-3xl text-blue-500 font-bold my-5'>Add Obstacles</h1>
                        <form className="space-y-4 grid grid-cols-3 gap-4">
                            <div className="col-span-1 mt-4">
                                <label className="mb-1">
                                    X Coordinate:
                                    <input
                                        type="number"
                                        name="x"
                                        value={newObstacle.x}
                                        onChange={handleObstacleChange}
                                        className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                    />
                                </label>
                            </div>
                            <div className="col-span-1">
                                <label className="mb-1 flex justify-center items-center flex-col">
                                    Y Coordinate:
                                    <input
                                        type="number"
                                        name="y"
                                        value={newObstacle.y}
                                        onChange={handleObstacleChange}
                                        className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                    />
                                </label>
                            </div>
                            <div className="col-span-1">
                                <label className="block mb-1">
                                    Intensity:
                                    <input
                                        type="number"
                                        name="r"
                                        value={newObstacle.r}
                                        onChange={handleObstacleChange}
                                        className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                    />
                                </label>
                            </div>
                            <div className="col-span-3">
                                <button
                                    type="button"
                                    onClick={handleAddData}
                                    className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600"
                                >
                                    Add Obstacle
                                </button>
                            </div>
                        </form>

                    </div>

                </div>

                <div className='h-full flex justify-center items-center pr-10'>
                    <BubbleLine bubbleData={obstacles} positionData={[startingPosition, endPosition]} lineData={lineData}/>
                </div>
            </div>
            <div className='w-full mb-10 flex justify-center items-center'>
                <button className='bg-green-500 text-white w-[20rem] h-[2.5rem] text-2xl  rounded-xl' onClick={handleGetShortestPath}>Get Shortest Path</button>
            </div>
        </>
    );
};

export default HomePage;
