import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { DomainsComponent } from './components/domains/domains.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfileComponent,
    DashboardComponent,
    SkillsComponent,
    ResumeComponent,
    DomainsComponent,
    AboutComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
