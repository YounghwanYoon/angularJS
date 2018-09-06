class Point{
    x:number;
    y:number;

    draw(){
        console.log('X: ' + this.x + ', Y: '+ this.y);
    }

    getDistance(another:Point){

    }
}

let points:Point = new Point();
points.draw();