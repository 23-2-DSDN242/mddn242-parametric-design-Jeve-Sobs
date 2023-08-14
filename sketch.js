const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "shape1": 17,
  "offsetX1": 0,
  "offsetY1": 0,
  "shape2": 15,
  "offsetX2": 0,
  "offsetY2": 0,
  "shape3": 0,
  "offsetX3": 0,
  "offsetY3": 35,
  "shape4": 0,
  "offsetX4": 0,
  "offsetY4": 35
}

const letterB = {
  "shape1": 45,
  "offsetX1": 40,
  "offsetY1": 0,
  "shape2": 46,
  "offsetX2": 40,
  "offsetY2": 75,
  "shape3": 35,
  "offsetX3": 0,
  "offsetY3": 0,
  "shape4": 36,
  "offsetX4": 0,
  "offsetY4": 75
}

const letterC = {
  "shape1": 47,
  "offsetX1": 0,
  "offsetY1": 0,
  "shape2": 127,
  "offsetX2": 0,
  "offsetY2": 0,
  "shape3": 42,
  "offsetX3": 0,
  "offsetY3": 50,
  "shape4": 142,
  "offsetX4": 0,
  "offsetY4": 50
}
const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;
  textSize(20);
  

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function splitNumber(num) {
  let units = num % 10;     
  let tens = (num - units) / 10; 
  return [tens, units];
}

function getColourandSize(num) {
  switch(num){
    case 1:
      return [1,1];
    case 2:
      return [1,2];
    case 3:
      return [1,3];
    case 4:
      return [2,1];
    case 5:
      return [2,2];
    case 6:
      return [2,3];
    case 7:
      return [3,1];
    case 8:
      return [3,2];
    case 9:
      return [3,3];
    default:
      return [3,2];
  }
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  noStroke();
  drawShape(posx, posy, letterData.shape1, letterData.offsetX1, letterData.offsetY1);
  drawShape(posx, posy, letterData.shape2, letterData.offsetX2, letterData.offsetY2);
  drawShape(posx, posy, letterData.shape3, letterData.offsetX3, letterData.offsetY3);
  drawShape(posx, posy, letterData.shape4, letterData.offsetX4, letterData.offsetY4);
}

function drawShape(centreX, centreY, letter, posX, posY) {
  let shape = splitNumber(letter);
  let sizeAndColour = getColourandSize(shape[1]);

  switch(sizeAndColour[1]){
      case 1:
          fill(99, 242, 255);
          break;
      case 2:
          fill(112, 110, 204);
          break;
      case 3:
          fill(230, 160, 235);
          break;
      default:
          fill(255);
          break;
  }
  let size_CONST = 150;
  let size = size_CONST;
  switch(sizeAndColour[0]){
    case 1:
        size = size_CONST/3;
        break;
    case 2:
        size = size_CONST/2;
        break;
    case 3:
        size = size_CONST;
        break;
    default:
        //size = size_CONST;
        break;
}
  
  let h;

  switch (shape[0]) {
      case 1: // Equilateral triangle pointing up
          let s = (2 * size) / Math.sqrt(3);
          triangle(centreX + posX - s/2, centreY - posY , 
              centreX + posX + s/2, centreY - posY , 
              centreX + posX, centreY - posY - size);
        break;

      case 2: // Equilateral triangle pointing down
          s = (2 * size) / Math.sqrt(3);
          triangle(centreX + posX - s/2, centreY - posY - size, 
              centreX + posX + s/2, centreY - posY - size, 
              centreX + posX, centreY - posY);
        break;

      
      case 3: // Square
          rect(centreX + posX - size/2, centreY - posY - size/2 - size/2, size, size);
          break;
      
      case 4: // Circle
          ellipse(centreX + posX, centreY - posY - size/2, size, size);
          break;

      case 5: // Right angle triangle up
          triangle(centreX + posX, centreY + posY, 
                   centreX + posX, centreY + posY - size, 
                   centreX + posX + size, centreY + posY);
          break;

      case 6: // Right angle triangle down
          triangle(centreX + posX, centreY + posY, 
                   centreX + posX, centreY + posY + size, 
                   centreX + posX + size, centreY + posY);
          break;

      case 7: // Right angle triangle left
          triangle(centreX + posX, centreY + posY, 
                   centreX + posX - size, centreY + posY, 
                   centreX + posX, centreY + posY + size);
          break;

      case 8: // Right angle triangle right
          triangle(centreX + posX, centreY + posY, 
                   centreX + posX + size, centreY + posY, 
                   centreX + posX, centreY + posY + size);
          break;

      case 9: // Right angle triangle bottom left corner
          triangle(centreX + posX, centreY + posY, 
                   centreX + posX - size, centreY + posY, 
                   centreX + posX, centreY + posY + size);
          break;

      case 10: // Right angle triangle bottom right corner
          triangle(centreX + posX, centreY + posY, 
                   centreX + posX + size, centreY + posY, 
                   centreX + posX, centreY + posY + size);
          break;

      case 11: // Semi Circle down
          arc(centreX + posX, centreY + posY, size, size, PI, TWO_PI);
          break;

      case 12: // Rectangle 1:2 vertical
          rect(centreX + posX , centreY - posY - size, size/2, size);
          break;

      case 13: // Rectangle 1:2 horizontal
          rect(centreX + posX, centreY - posY - size, size*2, size);
          break;

      case 14: // Rectangle 1:1.5 horizontal
          rect(centreX + posX, centreY - posY - size, size*1.5, size);
          break;

      default:
          break;
  }
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
