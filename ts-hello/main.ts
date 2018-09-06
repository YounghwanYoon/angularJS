//import {Class} from 'module file name ' 
//exclude .ts from point.ts;
import {Point} from'./point'

let points = new Point(1,2);
let x = points.x;
points.x = 10;
points.draw();