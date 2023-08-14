import { Routes } from "@angular/router";  
import { TaskComponent } from "./task.component";
import { LoadDetailComponent } from "./load-detail/load-detail.component";

export const routes: Routes = [
    {
        path: '',
        component: TaskComponent
    },
    {
        path: 'load-detail',
        component: LoadDetailComponent
    } 
];