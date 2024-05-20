import { Routes } from "@angular/router";  
import { TaskComponent } from "./task.component";
import { LoadDetailComponent } from "./load-detail/load-detail.component";
import { LoadEditComponent } from "./load-edit/load-edit.component";

export const routes: Routes = [
    {
        path: '',
        component: TaskComponent
    },
    {
        path: 'load-detail',
        component: LoadDetailComponent
    } ,
    {
        path: 'load-edit',
        component: LoadEditComponent
    } 
];