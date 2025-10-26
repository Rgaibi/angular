import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseComponent } from './courses/course/course.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CanActivate, CanActivateChild, Candeactivate, resolve } from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent, canDeactivate:[Candeactivate]},
  {path: 'Courses', component: CoursesComponent, resolve: {courses: resolve}},
  // {path: 'Courses/Course/:id', component: CourseComponent},
  {path: 'Courses', canActivateChild: [CanActivateChild], children: [
    {path: 'Course/:id', component: CourseComponent },
    {path: 'Checkout', component: CheckoutComponent}
    // {path: 'Checkout', component: CheckoutComponent, canActivate: [CanActivate] }
  ]},
  {path: 'Login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
