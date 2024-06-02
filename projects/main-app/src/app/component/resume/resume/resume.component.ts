import { AfterViewInit, Component } from '@angular/core';
import { ResumeDataService } from '../../../model/resume-data.service';
import { ResumeBuilderService } from '../../../services/resume-builder.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit {


  resumeData!: ResumeDataService;

  constructor(private rest: ResumeBuilderService) { }

  ngAfterViewInit(): void {
    this.getResumeData()
  }
  getResumeData() {
    this.rest.getResumeData('sk').subscribe({
      next: (data: ResumeDataService) => {
        this.resumeData = data;
      }
    })
  }


  get headerConfig() {
    return this.resumeData.headerConfig;
  }
}
