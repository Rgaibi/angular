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
  formStatus: string = ''

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

      this.reactiveForm.valueChanges.subscribe((data) => {
        console.log(data);
      })

      this.reactiveForm.statusChanges.subscribe((status) => {
        console.log(status);
        this.formStatus = status;
      })


      // this.reactiveForm.get('firstname')?.statusChanges.subscribe((status) => {
      //   console.log(status);
      // })    
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


    GenerateUsername(){
    let username = '';
    const fName: string= this.reactiveForm.get('firstname')?.value;
    const lName: string= this.reactiveForm.get('lastname')?.value;
    const dob: string= this.reactiveForm.get('dob')?.value;

    if(fName.length >= 3){
      username += fName.slice(0, 3);
    }
    else {
      username += fName;
    }

    if(lName.length >= 3){
      username += lName.slice(0, 3);
    }
    else {
      username += lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();
    // console.log(username);


    // this.reactiveForm.setValue({
    //   firstname: this.reactiveForm.get('firstname')?.value,
    //   lastname: this.reactiveForm.get('lastname')?.value,
    //   email: this.reactiveForm.get('email')?.value,
    //   username: username,
    //   dob: this.reactiveForm.get('dob')?.value,
    //   gender: this.reactiveForm.get('gender')?.value,
    //   address: {
    //     street: this.reactiveForm.get('address.street')?.value,
    //     country: this.reactiveForm.get('address.country')?.value,
    //     city: this.reactiveForm.get('address.city')?.value,
    //     region: this.reactiveForm.get('address.region')?.value,
    //     postal: this.reactiveForm.get('address.postal')?.value
    //   },
    //   skills: this.reactiveForm.get('skills')?.value,
    //   experience: this.reactiveForm.get('experience')?.value
    // })

        this.reactiveForm.get('username')?.setValue(username);

        this.reactiveForm.patchValue({
          username: username,
          address: {
            city: 'Montils'
      }
    })
    }  
}
