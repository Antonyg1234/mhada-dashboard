import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardDetailComponent } from './content-area/views/board-detail/board-detail.component';
import { ProjectDetailComponent } from './content-area/views/project-detail/project-detail.component';
import { ModuleDetailComponent } from './content-area/views/module-detail/module-detail.component';

import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boards',
    pathMatch: 'full',
  },
  {
    path:'boards',
    component:CommonLayoutComponent,
    children: [
         { path: '', component: BoardDetailComponent },
    ]
  },
  {
    path:'projects',
    component:CommonLayoutComponent,
    children: [
        { path: '', component: ProjectDetailComponent },
    ]
  },
  {
    path:'modules',
    component:CommonLayoutComponent,
    children: [
        { path: '', component: ModuleDetailComponent },
    ]
  },
  {
    path:'**',
    component:CommonLayoutComponent,
    children:[
      { path: '', component: BoardDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
