import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AudioCrudComponent } from './audio-crud/audio-crud.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'audio-crud', component: AudioCrudComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

