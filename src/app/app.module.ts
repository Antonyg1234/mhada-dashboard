import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FinanceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
