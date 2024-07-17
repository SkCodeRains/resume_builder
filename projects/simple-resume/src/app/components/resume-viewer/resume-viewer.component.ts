import { AfterViewInit, Component, ElementRef, Input, ViewEncapsulation, inject, input, viewChild } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { ResumeViewerModule } from '../resume-template/001/app.module';
import { IFormConfig } from '../../interfaces/interfaces';

@Component({
  selector: 'app-resume-viewer',
  standalone: true,
  imports: [ResumeViewerModule],
  templateUrl: './resume-viewer.component.html',
  styleUrl: './resume-viewer.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ResumeViewerComponent implements AfterViewInit {

  resumeData = input.required<DataService>();
  config = input.required<Array<IFormConfig>>();

  resumeref = inject(ElementRef);

  ngAfterViewInit(): void { 

    document.body.innerHTML = '';
    document.body.appendChild(this.resumeref.nativeElement);

  }
}
