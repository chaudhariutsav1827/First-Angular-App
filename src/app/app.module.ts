import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobService } from '../services/job.service';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RoutingComponents, JobDetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [JobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
