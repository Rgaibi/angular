import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  selectedCourse!: Course;
  courseId!: number;
  courseService: CourseService = inject(CourseService);
  activateRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // this.courseId = this.activateRoute.snapshot.params['id'];
    this.courseId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.selectedCourse = this.courseService.courses.find((course) => {return course.id === this.courseId})!;    
  }
}
