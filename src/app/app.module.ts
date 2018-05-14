import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, enableProdMode } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import 'devextreme/integration/jquery';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderManagerPageComponent } from './header-manager-page/header-manager-page.component';
import { SidebarManagerPageComponent } from './sidebar-manager-page/sidebar-manager-page.component';
import { PostTableComponent } from './post-table/post-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { UserAddComponent } from './user-add/user-add.component';
import { CompanyAddComponent } from './company-add/company-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    LoginComponent,
    CompanyComponent,
    AdminComponent,
    HeaderManagerPageComponent,
    SidebarManagerPageComponent,
    PostTableComponent,
    UserTableComponent,
    CompanyTableComponent,
    UserAddComponent,
    CompanyAddComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
