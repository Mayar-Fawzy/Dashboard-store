import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/core/login/login.component';
import { NotfoundComponent } from './components/core/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
