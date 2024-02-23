import math


class Point:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y


class Obstacle_Circle:
    def __init__(self, radius: float, center: Point):
        self.radius = radius
        self.center = center

    def inside_circle(self, point: Point):
        return math.sqrt((point.x - self.center.x) ** 2 + (point.y - self.center.y) ** 2) <= self.radius

    def how_to_exit_x(self, x: float):
        return self.center.x - x

    def how_to_exit_y(self, y: float):
        return self.center.y - y
