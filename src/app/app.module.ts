import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {CommonService} from './shared/common.service';
import {User} from './shared/user.model';
import {UserService} from './shared/user.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AlreadyRegisterComponent } from './already-register/already-register.component';
import { AddvaccineComponent } from './addvaccine/addvaccine.component';

const appRoutes: Routes = [
  {path: 'register' , component: RegistrationComponent},
  {path: 'alreadyregister' , component: AlreadyRegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AlreadyRegisterComponent,
    AddvaccineComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
