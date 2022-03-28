import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { TranslateCompiler, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent
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
