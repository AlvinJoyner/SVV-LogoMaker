const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

// Prompt the user for input using inquirer
inquirer.prompt([
  // Prompt for initials (up to three characters)
  {
    type: 'input',
    name: 'text',
    message: 'Enter your initials (up to three characters):',
    validate: text => (text.length > 3) ? 'Please enter up to three characters.' : true
  },
  // Prompt for text color
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter a color for the text.'
  },
  // Prompt for shape choice (circle, square, triangle)
  {
    type: 'list',
    name: 'shape',
    choices: ['circle', 'square', 'triangle']
  },
  // Prompt for shape color
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a color for the shape.'
  }
]).then(answers => {
  // Determine the shape based on the user's choice
  const shape = (answers.shape === 'circle')
    ? new Circle()
    : (answers.shape === 'square')
      ? new Square()
      : new Triangle();

  // Set the color for the chosen shape
  shape.setColor(answers.shapeColor);

  // Generate SVG code using the shape and user's input
  const svgCode = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()} // Render the shape SVG code
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>`;

  // Display the generated SVG code in the console
  console.log(svgCode);

  // Write the generated SVG code to a file named 'logo.svg'
  fs.writeFileSync('logo.svg', svgCode);
});
