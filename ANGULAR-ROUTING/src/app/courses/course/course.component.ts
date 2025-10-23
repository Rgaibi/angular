import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  selectedCourse!: Course;
  courseId!: number;
  courseService: CourseService = inject(CourseService);
  activateRoute: ActivatedRoute = inject(ActivatedRoute);
  paramObs!: Subscription;
  ngOnInit(): void {
    // this.courseId = this.activateRoute.snapshot.params['id'];
    // this.courseId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.activateRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id')!;
      this.selectedCourse = this.courseService.courses.find(course =>  course.id === this.courseId)!
    }) 
    
  }

      ngOnDestroy() {
      this.paramObs.unsubscribe();
    }
}
