import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'REACTIVE-FORMS';
  reactiveForm!: FormGroup;

  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        username: new FormControl(null),
        dob: new FormControl(null),
        gender: new FormControl('male'),
        address: new FormGroup({
          street: new FormControl(null, Validators.required),
          country: new FormControl('France', Validators.required),
          city: new FormControl(null),
          region: new FormControl(null),
          postal: new FormControl(null, Validators.required)
        }),
        skills: new FormArray([
          new FormControl(null, Validators.required),
        ])


      })
  }

  onFormSubmitted() {
    console.log(this.reactiveForm);
  }

  get skillsControls() {
    return (this.reactiveForm.get('skills') as FormArray).controls;
  }

  addSkills() {
    (this.reactiveForm.get('skills') as FormArray).push(new FormControl(null, Validators.required))
  }
  deleteSkills(index: number) {
    (this.reactiveForm.get('skills') as FormArray).removeAt(index)    
  }
}
