import { Component } from "@angular/core";

//Logic for calling HTTP requests 
//This provides a fake implementation of net service .
//Also provides independence of HTTP server which allows an unit testing. 
//Unit Testing is testing class/methods without depending on anything such as other component or http server. 
//@Component() is not used because 'service' is plain typescrip class
export class CoursesService{
    getCourses(){
        return ["course1","course2","course3"];
    }
}