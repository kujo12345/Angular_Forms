import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class UserTemplateComponent implements OnInit {

  

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


  const db = require('./db.js');
  const bcrypt = require ('bcrypt');
  const saltRounds = 10;
  var password = "Fkdj^45ci@Jad";

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      
    });
  });

  function hasAccess(val: any){
    if (val) {
      
      console.log("Access Granted!");
    }
    else {
  
      console.log("Access Denied!");
    }
  }
}
