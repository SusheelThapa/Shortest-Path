from fastapi import FastAPI
from pso import particle_swarm_optimization
from obstacles import Obstacle_Circle, Point

from model import Data

app = FastAPI()


@app.post("/shortest-path")
async def shortest_path(data: Data):
    obstacle_circles = [
        Obstacle_Circle(circle.radius, Point(circle.center.x, circle.center.y))
        for circle in data.obstacles
    ]

    best_location = particle_swarm_optimization(
        max_iterations=1000,
        swarm_size=200,
        max_vel=4,
        step_size=1,
        inertia=0.9,
        c1=2.05,
        c2=2.05,
        circles=obstacle_circles,
        start=data.starting_point,
        end=data.target_point,
    )

    return {"best_location": [{"x": point[0], "y": point[1]} for point in best_location]}

