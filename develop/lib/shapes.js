// Define a base class called Shape
class Shape {
    constructor(){
        // Each shape has a property to store its color, initialized as an empty string.
        this.color = ""
    }
    
    // Method to set the color of the shape
    setColor(color){
       this.color = color;
    }
  }
  
  // Define a class Triangle that extends the Shape class
  class Triangle extends Shape {
    // Method to render the Triangle shape as an SVG polygon
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
  }
  
  // Define a class Circle that extends the Shape class
  class Circle extends Shape {
    // Method to render the Circle shape as an SVG circle
    render(){
        return `<circle cx="150" cy="100" r="120" fill="${this.color}" />`
    }
  }
  
  // Define a class Square that extends the Shape class
  class Square extends Shape {
    // Method to render the Square shape as an SVG rectangle
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
  }
  
  // Export the Circle, Triangle, and Square classes so they can be used in other files/modules
  module.exports = {Circle, Triangle, Square}
  