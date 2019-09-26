import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentAreaComponent} from 'src/app/content-area/content-area.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
const routes: Routes = [
  {path:'',component:ContentAreaComponent},
  {path:':board', component:BoardDetailComponent},
  {path:':board/:project', component:ProjectDetailComponent},
  {path:':board/:project/:module', component:ModuleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
