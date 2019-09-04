import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
import {CommonService} from '../shared/common.service';
import {NgForm} from '@angular/forms';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import {Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-already-register',
  templateUrl: './already-register.component.html',
  styleUrls: ['./already-register.component.css']
})
export class AlreadyRegisterComponent implements OnInit {
  user: User;
  valbutton = 'Save';
  data1;

  constructor(private newService: CommonService) {
    this.user = new User();
  }

  getinfo = function (user, isValid: boolean) {
    user.mode = this.valbutton;
    console.log('getting data already register component');
    this.newService.Getuserinfo(user)
      .subscribe(data => {
        this.data1 = data;
        alert(data);
        console.log(data);
      });
  };

  ngOnInit() {
  }

}
