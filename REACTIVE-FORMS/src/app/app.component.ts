import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './validators/noSpaceAllowed.validators';

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
        firstname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
        lastname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        username: new FormControl(null, Validators.required, CustomValidators.checkUserName),
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
        ]),
        experience: new FormArray([

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

    get experienceControls() {
    return (this.reactiveForm.get('experience') as FormArray).controls;
  }

  addExperience() {
    const frmGroup = new FormGroup({
                      company: new FormControl(null),
                      position: new FormControl(null),
                      totalExp: new FormControl(null),
                      start: new FormControl(null),
                      end: new FormControl(null)

                     });
    (this.reactiveForm.get('experience') as FormArray).push(frmGroup)                 
  }

  deleteExperience(index: number) {
    (this.reactiveForm.get('experience') as FormArray).removeAt(index);
  }
}
