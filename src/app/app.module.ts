import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './content-area/header/header.component';
import { SidebarComponent } from './content-area/sidebar/sidebar.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { SharedComponent } from './shared/shared.component';
import { BreadcrumbComponent } from './content-area/breadcrumb/breadcrumb.component';
import { ViewsComponent } from './content-area/views/views.component';
import { ContentAreaWrapperComponent } from './content-area-wrapper/content-area-wrapper.component';
import { BoardDetailComponent } from './content-area/views/board-detail/board-detail.component';
import { ProjectDetailComponent } from './content-area/views/project-detail/project-detail.component';
import { ModuleDetailComponent } from './content-area/views/module-detail/module-detail.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FinanceDetailComponent } from './content-area/views/finance-detail/finance-detail.component';
import { SvgComponent } from './content-area/views/svg/svg.component';
import { DashboardDetailComponent } from './content-area/views/dashboard-detail/dashboard-detail.component';
import { LoginComponent } from './login/login.component';
import { RightLayoutComponent } from './right-layout/right-layout.component';
import { FormsModule} from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { BoardDetailService } from './../app/content-area/views/board-detail/board-detail.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './token.interceptor';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentAreaComponent,
    SharedComponent,
    BreadcrumbComponent,
    ViewsComponent,
    ContentAreaWrapperComponent,
    BoardDetailComponent,
    ProjectDetailComponent,
    ModuleDetailComponent,
    LayoutsComponent,
    CommonLayoutComponent,
    FinanceDetailComponent,
    SvgComponent,
    DashboardDetailComponent,
    LoginComponent,
    RightLayoutComponent,
    FrontLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [FormBuilder,TokenService, AuthService, BoardDetailService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
