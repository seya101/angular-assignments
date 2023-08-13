import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectStatus = ['Stable', 'Critical', 'Finished'];

  projectForm: FormGroup;

  ngOnInit(): void {
      this.projectForm = new FormGroup({
        projectName : new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName),
        email : new FormControl(null, [Validators.required, Validators.email]),
        status :  new FormControl('Stable')
      });
  }

  invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'test') {
        return {'invalidProjectName': true};
    }
    return null
}

  onSubmit() {
    console.log(this.projectForm)
  }
}
