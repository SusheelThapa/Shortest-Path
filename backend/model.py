from pydantic import BaseModel
from typing import List


class Point(BaseModel):
    x: int
    y: int


class Circle(BaseModel):
    center: Point
    radius: int


class Data(BaseModel):
    starting_point: Point
    target_point: Point
    obstacles: List[Circle]
