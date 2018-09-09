
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses> "courses" or <iv id="courses"> "#courses"
    //using backtip for organization and increase inseration 
    //ngFor is a directive and prefix * is used 
    //when directive modifies the structure of the dom, {{}}, by adding or removing an element
    // let course of courses is iteration like for loop. 
    template:  `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses" >
                {{course}}
            </li> 
        </ul>   
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    //service:CoursesService is decouple with HTTP server and CourseComponent.
    //Dependency injection means injecting or providing the dependencies of a clas into its constructor
    //Angular provide Dependency injection,   
    //Putting service in parameter of constructor and register this as a provider in our app module 
    //this component first will instantiate its dependencies -> inject those dependencies into the constructor of this class   
    constructor(service:CoursesService){
        //Below is tightly coupling with HTTP Server and disallow unit testing.
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }
}