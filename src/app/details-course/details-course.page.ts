import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute : ActivatedRoute,
    private courseService : ListCoursesService,
    private alertController: AlertController,
    private router : Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      this.selectedCourse = this.courseService.getCourseById(p.get('id'));

    });
  
} 
    
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // let id = this.activatedRoute.snapshot.params['id'];
    // console.log(id);
    

async deleteCourse() {
  const alert = await this.alertController.create({
    header: 'Confirm',
    message : 'Are you sure to delete this course?',
    buttons: 
    [
      {
        text : 'Yes',
        handler : () => {
          this.courseService.deleteCourse(this.selectedCourse);
          // this.courseService = courseService.deleteCourse(); 
          console.log(this.courseService.getAllCourses());
          this.router.navigateByUrl('/home');
        },
      },
      {
        text: 'No',
        role: 'Cancel',
      },
    ],
  });


  await alert.present();
}
}
