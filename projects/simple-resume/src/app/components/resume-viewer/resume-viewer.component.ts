import { AfterViewInit, Component, ElementRef, ViewEncapsulation, inject, input } from '@angular/core';
import { DataService } from '../../data-services/data.service'; 
import { IFormConfig } from '../../interfaces/interfaces';
import { ResumeViewerModule } from '../resume-template/001/app.module';

@Component({
    selector: 'app-resume-viewer',
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
