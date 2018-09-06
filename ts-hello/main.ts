class Point{
    x:number;
    y:number;

    draw(){
        console.log('X: ' + this.x + ', Y: '+ this.y);
    }

    getDistance(another:Point){

    }
}

let points = new Point();
points.x = 1;
points.y = 2;
points.draw();