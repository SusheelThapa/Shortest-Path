from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
import matplotlib.pyplot as plt
from io import BytesIO

from pso import particle_swarm_optimization
from obstacles import Obstacle_Circle, Point
from model import Data

app = FastAPI()


def plot_graph(best_location, start, end, obstacles):
    plt.close("all")
    plt.figure(figsize=(8, 8))
    plt.grid(True)
    plt.scatter(end.x, end.y, 100, marker="*", facecolors="k",
                edgecolors="k", label='Target')
    plt.scatter(start.x, start.y, 100, marker="o",
                facecolors="k", edgecolors="k", label='Start')

    for circle in obstacles:
        circle_patch = plt.Circle(
            (circle.center.x, circle.center.y), circle.radius -0.2, fill="red", color="red")
        plt.gca().add_patch(circle_patch)

    X = [best_location[i][0] for i in range(len(best_location))]
    X.insert(0, start.x)
    X.append(end.x)
    Y = [best_location[i][1] for i in range(len(best_location))]
    Y.insert(0, start.y)
    Y.append(end.y)

    plt.plot(X, Y, "o-", label='Optimized Path')

    for i in range(len(best_location)):
        plt.scatter(
            best_location[i][0],
            best_location[i][1],
            25,
            marker=".",
            facecolors="blue",
            edgecolors="face",
        )
        plt.text(best_location[i][0] + 0.1,
                 best_location[i][1] + 0.1, str(i), fontsize=8)

    plt.xlim(-1, 23)
    plt.ylim(-1, 23)
    plt.title("Particle Swarm Optimization")
    plt.legend()
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')

    # Return the plot object if needed
    return plt


def generate_optimized_path_image(data: Data):
    obstacle_circles = [
        Obstacle_Circle(circle.radius, Point(circle.x, circle.y))
        for circle in data.obstacles
    ]

    best_location = particle_swarm_optimization(
        max_iterations=500,
        swarm_size=100,
        max_vel=4,
        step_size=1,
        inertia=0.9,
        c1=2.05,
        c2=2.05,
        circles=obstacle_circles,
        start=data.startingPosition,
        end=data.targetPosition,
    )

    plot_obj = plot_graph(best_location, data.startingPosition,
                          data.targetPosition, obstacle_circles)

    buf = BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    plt.close()

    return buf


@app.post("/shortest-path")
async def shortest_path(data: Data):
    print(data)
    image_buffer = generate_optimized_path_image(data)
    return StreamingResponse(content=image_buffer, media_type="image/png")
