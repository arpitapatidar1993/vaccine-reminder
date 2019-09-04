import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
import {CommonService} from '../shared/common.service';
import {NgForm} from '@angular/forms';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import {Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  user: User;
  valbutton = 'Save';
  data1;
  i;
  constructor(private newService: CommonService) {
    this.user = new User();
  }
  onSave = function (user, isValid: boolean) {
    user.mode = this.valbutton;
    console.log('saving data register component');
    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data);
      });
  };

  get = function (user) {
    console.log('getting data register component');
    this.newService.GetUser(user)
      .subscribe(data => {
        this.data1 = data;
      });
  };

  ngOnInit() {
  }

}
