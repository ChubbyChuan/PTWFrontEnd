import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main.component';
import { CreateComponent } from './components/create.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PTWService } from './PTW.service';
import { ApprovalComponent } from './components/approval.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent, title: 'Main' },
  { path: 'create', component: CreateComponent, title: 'create' },
  { path: 'approval', component: ApprovalComponent, title: 'approval' },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateComponent,
    ApprovalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule

  ],
  providers: [PTWService],
  bootstrap: [AppComponent]
})
export class AppModule { }
