import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  navigateToCourses() {
    // this.router.navigate(['Courses'], {relativeTo: this.activeRoute});  // relative path
    this.router.navigateByUrl('Courses'); //always absolute path
  }

  onSearchClicked(value: string) {
    this.router.navigate(['/Courses'], {queryParams: {search: value}})
  }
}
