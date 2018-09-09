import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  //all the dependencies that components in this module are dependent upon goes under providers.
  //Ex. our Courses component is dependent upon courses service
  //It is now became a singleton, single instance of a given object exists in the memory that feed every clients
  providers: [
    CoursesService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
