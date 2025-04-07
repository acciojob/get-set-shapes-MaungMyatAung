// Rectangle class
class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive integers.");
        }
        this._width = width;   // Initialize width property
        this._height = height; // Initialize height property
    }

    get width() {
        return this._width; // Getter for width
    }

    get height() {
        return this._height; // Getter for height
    }

    getArea() {
        return this._width * this._height; // Calculate area
    }
}

// Square class that inherits from Rectangle
class Square extends Rectangle {
    constructor(side) {
        if (side <= 0) {
            throw new Error("Side must be a positive integer.");
        }
        super(side, side); // Call the Rectangle constructor with width and height as side
    }

    getPerimeter() {
        return this.width * 4; // Calculate perimeter
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;