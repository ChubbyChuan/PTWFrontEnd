import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main.component';
import { CreateComponent } from './Create/create.component';
import { RegisterComponent } from './Account/register.component';
import { LoginComponent } from './Account/login.component';
import { ApprovalComponent } from './Approval/approval.component';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PTWService } from './Service/PTW.service';
import { AccountService } from './Service/Account.service';
import { ChartService } from './Service/Chart.service';
import { ChartComponent } from './Chart/chart.component';
import { AuthGuard } from './Service/auth.guard';




const appRoutes: Routes = [
  { path: '', component: MainComponent, title: 'Main' },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'register', component: RegisterComponent, title: 'Register'  },
  { path: 'create', component: CreateComponent, title: 'create', canActivate: [AuthGuard] },
  { path: 'approval', component: ApprovalComponent, title: 'approval',canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateComponent,
    ApprovalComponent,
    LoginComponent,
    RegisterComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule

  ],
  providers: [PTWService, AccountService, ChartService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
