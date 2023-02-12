import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrucrionsComponent } from './instrucrions/instrucrions.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'instructions', component: InstrucrionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
