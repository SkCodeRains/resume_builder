import { NgModule } from '@angular/core';
import { ResumeDataComponent } from './resume-data.component';
import { TextTransform } from './pipes/text-transform.pipe';



@NgModule({
  declarations: [
    ResumeDataComponent
  ],
  imports: [
    TextTransform
  ],
  exports: [
    ResumeDataComponent,
    TextTransform
  ]
})
export class ResumeDataModule { }
