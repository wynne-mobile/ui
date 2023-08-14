import { Routes } from "@angular/router";
import { SettingsComponent } from "./settings.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
    {
        path: '',
        component: SettingsComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];