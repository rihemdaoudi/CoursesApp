import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  constructor(private courseService : ListCoursesService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(newCourse){

    console.log(newCourse);
    this.courseService.addCourse(newCourse);
    this.router.navigateByUrl('/home');
  }

}
