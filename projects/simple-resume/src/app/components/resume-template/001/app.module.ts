import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResumeHeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ButtonComponent, SideSectionComponent } from './side-section/side-section.component';
import { CommonModule } from '@angular/common';
import { TextTransform } from 'common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResumeHeaderComponent,
    MainSectionComponent,
    SideSectionComponent,
    ButtonComponent
  ],
  imports: [
    TextTransform,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ResumeHeaderComponent,
    MainSectionComponent,
    SideSectionComponent,
    
  ]
})
export class ResumeViewerModule { }
