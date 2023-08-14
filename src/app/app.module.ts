import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutContainerComponent } from './shared/main-layout-container/main-layout-container.component'; 
import { SimpleLayoutContainerComponent } from './shared/simple-layout-container/simple-layout-container.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorLayoutContainerComponent } from './shared/error-layout-container/error-layout-container.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { TaskComponent } from './task/task.component';
import { SubLayoutContainerComponent } from './shared/sub-layout-container/sub-layout-container.component'; 
import { TaskItemListComponent } from './task/task-item-list/task-item-list.component';
import { LoadDetailComponent } from './task/load-detail/load-detail.component';
import { ModalEnRouteComponent } from './task/modal-en-route/modal-en-route.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    MainLayoutContainerComponent, 
    SimpleLayoutContainerComponent, 
    SettingsComponent, 
    PageNotFoundComponent, 
    ErrorLayoutContainerComponent, 
    LoginComponent, 
    TaskComponent, 
    LoadDetailComponent,
    SubLayoutContainerComponent,
    TaskItemListComponent, 
    ModalEnRouteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
