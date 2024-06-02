import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SideSectionComponent } from './components/side-section/side-section.component';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeDataModule } from 'projects/resume-data/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    SideSectionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbProgressbarModule,
    ResumeDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
