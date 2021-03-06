export class Point{
    //? means optional. This feature allows 
    //us to have a constructor without any parameter. 
    
    constructor(private _x?:number, private _y?:number){

    }
    draw(){
        console.log('X: ' + this._x + ', Y: '+ this._y);
    }

    getDistance(another:Point){

    }

    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }

    set x(value){
        if(value <0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }
    set y(value){
        if(value <0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }

}
