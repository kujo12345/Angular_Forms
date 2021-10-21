import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'job-output',
  templateUrl: './job-output.component.html',
  styleUrls: ['./job-output.component.css']
})
export class JobOutputComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private fb: FormBuilder) { 
    
  }

  //Recommended Use
  form = this.fb.group({  
    occupation: ['', {
      validators: [Validators.required, Validators.occupation],
    }],
    location: ['', {
      validators: [Validators.required, Validators.location],
    }],
    address: ['', {
      validators: [Validators.required, Validators.address],
    }],
    income: ['', {
      validators: [Validators.required, Validators.income],
    }],
    id: ['', {
      validators: [Validators.required, Validators.id],
    }],
  })
   

  onSubmit(){
    console.log(this.form.controls.occupation.value);
    console.log(this.form.controls.location.value);
    console.log(this.form.controls.address.value);
    console.log(this.form.controls.income.value);
    console.log(this.form.controls.id.value);

  }


  get occupation(){
    return this.form.controls['occupation'];
  }
  get location(){
    return this.form.controls['location'];
  }
  get address (){
    return this.form.controls['address'];
  }
  get income(){
    return this.form.controls['income'];
  }
  get id(){
    return this.form.controls['id'];
  }
}
