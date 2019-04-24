import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { MessagesComponent } from './messages/messages.component';
import { httpInterceptorProviders } from './http-intercepts';
import { UploaderComponent } from './upload/uploader.component';
import { AuthService } from './auth.service';
import { HttpErrorHandler } from './http-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,

  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
