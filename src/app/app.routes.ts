import { RouterModule, Routes } from '@angular/router';
import { PrioritiesPageComponent } from './priorities-page/priorities-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'priority', component: PrioritiesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }