/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

var interpPercent = 100;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let shape1 = letterData["shape1"];
  let offsetX1 = letterData["offsetX1"];
  let offsetY1 = letterData["offsetY1"];

  let shape2 = letterData["shape2"];
  let offsetX2 = letterData["offsetX2"];
  let offsetY2 = letterData["offsetY2"];

  let shape3 = letterData["shape3"];
  let offsetX3 =  letterData["offsetX3"];
  let offsetY3 = letterData["offsetY3"];
  
  let shape4 = letterData["shape4"];
  let offsetX4 =letterData["offsetX4"];
  let offsetY4 =letterData["offsetY4"];

  let posx = 50;

  let posy = 150;

  noStroke();
  drawShape(posx, posy, shape1, offsetX1, offsetY1);
  drawShape(posx, posy, shape2, offsetX2, offsetY2);
  drawShape(posx, posy, shape3, offsetX3, offsetY3);
  drawShape(posx, posy, shape4, offsetX4, offsetY4);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["shape1"]    = map(percent, 1, 100, oldObj["shape1"], newObj["shape1"]);
  new_letter["offsetX1"] = map(percent, 0, 50, oldObj["offsetX1"], newObj["offsetX1"]);
  new_letter["offsetY1"] = map(percent, 0, 50, oldObj["offsetY1"], newObj["offsetY1"]);
  new_letter["shape2"]    = map(percent, 1, 100, oldObj["shape2"], newObj["shape2"]);
  new_letter["offsetX2"] = map(percent, 0, 50, oldObj["offsetX2"], newObj["offsetX2"]);
  new_letter["offsetY2"] = map(percent, 0, 50, oldObj["offsetY2"], newObj["offsetY2"]);
  new_letter["shape3"]    = map(percent, 1, 100, oldObj["shape3"], newObj["shape3"]);
  new_letter["offsetX3"] = map(percent, 0, 50, oldObj["offsetX3"], newObj["offsetX3"]);
  new_letter["offsetY3"] = map(percent, 0, 50, oldObj["offsetY3"], newObj["offsetY3"]);
  new_letter["shape4"]    = map(percent, 1, 100, oldObj["shape4"], newObj["shape4"]);
  new_letter["offsetX4"] = map(percent, 0, 50, oldObj["offsetX4"], newObj["offsetX4"]);
  new_letter["offsetY4"] = map(percent, 0, 50, oldObj["offsetY4"], newObj["offsetY4"]);
  //text(percent + interp,100,100);
  
  interpPercent = percent;
  return new_letter;
}

function easeInCubic(t) {
  return t * t *t * t * t *t * t * t *t * t * t *t;
}

function drawShape(centreX, centreY, letter, posX, posY) {
  let shape = splitNumber(letter);
  let sizeAndColour = getColourandSize(shape[1]);
  let opacity = 255;
  let size_CONST = 90;
  if( interpPercent != 100){
    let normalizedPercent = interpPercent / 100;
    let easedPercent = easeInCubic(normalizedPercent);
    size_CONST = map(easedPercent, 0, 1, 1, 90);
    //opacity = map(easedPercent, 0, 1, 1, 90);
  }
  text(opacity,100,100);
  switch(sizeAndColour[1]){
      case 1:
          fill(99, 242, 255,opacity);
          break;
      case 2:
          fill(112, 110, 204,opacity);
          break;
      case 3:
          fill(230, 160, 235,opacity);
          break;
      default:
          fill(255);
          break;
  }
  
  
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
      case 0: // don't sraw shape 
        break;
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
        ellipse(centreX + posX, centreY - posY - size/2, size, size);
          break;
  }
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


var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
