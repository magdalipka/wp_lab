interface Shape {
  draw: () => void;
}

class Square implements Shape {
  draw() {
    console.log("Square");
  }
}

class Rectangle implements Shape {
  draw() {
    console.log("Rectangle");
  }
}

class Triangle implements Shape {
  draw() {
    console.log("Triangle");
  }
}

interface ShapeCreator {
  createShape: () => Shape;
}

class SquareCreator implements ShapeCreator {
  createShape() {
    return new Square();
  }
}

class RectangleCreator implements ShapeCreator {
  createShape() {
    return new Rectangle();
  }
}

class TriangleCreator implements ShapeCreator {
  createShape() {
    return new Triangle();
  }
}

function main() {
  const triangleCreator = new TriangleCreator();
  const squareCreator = new SquareCreator();
  const rectangleCreator = new RectangleCreator();

  const shapes = [
    triangleCreator.createShape(),
    triangleCreator.createShape(),
    rectangleCreator.createShape(),
    rectangleCreator.createShape(),
    squareCreator.createShape(),
    squareCreator.createShape(),
  ];

  shapes.forEach((shape) => shape.draw());
}

main();
