import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-output',
  templateUrl: './user-output.component.html',
  styleUrls: ['./user-output.component.css']
})
export class UserOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  val = {
    fname: "Juaquin Fert",
    lname: "Aller",
    birthdate: "2001-09-03",
    age: 20,
    password: 1234567
  };

  onSubmit(v: NgForm){
    console.log(v.value, v.valid);
    console.log(this.val);
  }

  onfnameChange(change: NgForm){
    console.log(change.value);
  } 

  onlnameChange(change: NgForm){
    console.log(change.value);
  }
  
  onbirthdateChange(change: NgForm){
    console.log(change.value);
  }

  onageChange(change: NgForm){
    console.log(change.value);
  }

  onpasswordChange(change: NgForm){
    console.log(change.value);
  }
}
