from pydantic import BaseModel
from typing import List


class Point(BaseModel):
    x: int
    y: int


class Circle(BaseModel):
    x:int
    y:int
    radius: int


class Data(BaseModel):
    startingPosition: Point
    targetPosition: Point
    obstacles: List[Circle]
