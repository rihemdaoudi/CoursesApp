import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCoursesService {
  private allCourses = [
    {
      id: 1 ,
      title: 'Angular',
      author: 'Rihem Daoudi',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      keywords : ['Component', 'Binding', 'Service']
    },
    {
      id: 2 ,
      title: 'Android',
      author: 'Chaima Ouni',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png',
      keywords : ['Mobile', 'Activity', 'SDK']
    },
    {
      id: 3 ,
      title: 'Ionic',
      author: 'Salmen Bani',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/220px-LogoIonic.png',
      keywords : ['Hybride', 'Mobile', 'Pages']
    }

  ]

  constructor() { }

  getAllCourses() {
    return this.allCourses;
  }

  getCourseById(id) {
    return this.allCourses.find((element) => element.id == id);
  }

  deleteCourse(course){
    let i = this.allCourses.indexOf(course);
    this.allCourses.splice(i, 1); 

  // this.allCourses = this.allCourses.filter((element) => element.id != course.id)
  }

  addCourse(newCourse) {
    newCourse.id = this.allCourses[this.allCourses.length - 1].id + 1;
    newCourse.keywords = newCourse.keywords.split(',');
    this.allCourses.push(newCourse);

  }
}
