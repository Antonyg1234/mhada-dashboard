import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardDetailComponent } from './content-area/views/board-detail/board-detail.component';
import { ProjectDetailComponent } from './content-area/views/project-detail/project-detail.component';
import { ModuleDetailComponent } from './content-area/views/module-detail/module-detail.component';
import { DashboardDetailComponent } from './content-area/views/dashboard-detail/dashboard-detail.component';
import { LoginComponent } from './login/login.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { SubModulesComponent } from './content-area/sub-modules/sub-modules.component';
import {AuthGuard} from './guards/AuthGuard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:'boards',
    component:CommonLayoutComponent,
    canActivate: [AuthGuard],
    children: [
         { path: '', component: BoardDetailComponent },
    ]
  },
  {
    path:'login',
    component:FrontLayoutComponent,
    children: [
         { path: '', component: LoginComponent },
    ]
  },
  {
    path:'projects/:board_id',
    component:CommonLayoutComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', component: ProjectDetailComponent },
    ]
  },
  {
    path:'modules/:project_id',
    component:CommonLayoutComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', component: ModuleDetailComponent },
    ]
  },
  {
    path:'sub_module/:module_id',
    component:CommonLayoutComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', component: SubModulesComponent },
    ]
  },
  {
    path:'dashboard',
    component:CommonLayoutComponent,
    children: [
        { path: '', component: DashboardDetailComponent },
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
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
