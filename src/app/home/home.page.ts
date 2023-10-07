import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage implements OnInit{
  tabCourses = [];

  constructor(public courseService : ListCoursesService) {}

  ngOnInit(): void{
    
    this.tabCourses = this.courseService.getAllCourses();
    console.log(this.tabCourses);

  }

  ionViewWillEnter(){
    console.log('Did Enter');
    this.tabCourses = this.courseService.getAllCourses();
  }
}
