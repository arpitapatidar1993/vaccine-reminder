import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClientJsonpModule} from '@angular/common/http';
import {text} from '@angular/core/src/render3/instructions';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user) {
   console.log('i am at save user at common services');
   return this.http.post('http://localhost:5000/api/SaveUser/', user)
     .map((response: Response) => response.text() );

  }

  GetUser(user) {
    console.log('i am at getuser at common services');
    return this.http.get('http://localhost:5000/api/getVaccine')
      .map((response: Response) => response.json());
  }

  Getuserinfo(user) {
    console.log('i am at getuser at common services');
    console.log(user);
    return this.http.post('http://localhost:5000/api/getUser', user)
      .map((response: Response) => response.json());

  }

}
