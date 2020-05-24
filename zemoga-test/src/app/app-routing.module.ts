import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstantsService } from './shared/constants.service';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main-component', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
