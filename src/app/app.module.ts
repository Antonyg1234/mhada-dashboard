import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { SharedComponent } from './shared/shared.component';
import { BreadcrumbComponent } from './content-area/breadcrumb/breadcrumb.component';
import { ViewsComponent } from './content-area/views/views.component';
import { BoardComponent } from './content-area/views/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentAreaComponent,
    SharedComponent,
    BreadcrumbComponent,
    ViewsComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
