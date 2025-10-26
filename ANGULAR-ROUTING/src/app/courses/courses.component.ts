import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    coursesService = inject(CourseService);
    AllCourses!: Course[]
    activateRoute: ActivatedRoute =inject(ActivatedRoute)
     searchString: string = ''

    ngOnInit(): void {
      // this.searchString = this.activateRoute.snapshot.queryParamMap.get('search') ?? '';
      this.activateRoute.queryParamMap.subscribe((data) =>{
        this.searchString = data.get('search') ?? '';

        if(this.searchString === '' ) {
        // this.coursesService.getAllcourses().subscribe((data) => {
        //   this.AllCourses = data;
        // });
        this.AllCourses = this.activateRoute.snapshot.data['courses'];
        }
        else {
          this.AllCourses = this.coursesService.courses
                            .filter(x => x.title.toLowerCase()
                            .includes(this.searchString.toLowerCase()))
        }   
      })
      
    }

}
