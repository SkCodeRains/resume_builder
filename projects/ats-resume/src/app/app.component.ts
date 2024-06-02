import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ResumeDataService } from './model/resume-data.service';
import { ResumeBuilderService } from './services/resume-builder.service';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BodyComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ResumeBuilderService]
})
export class AppComponent implements AfterViewInit {

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
    return this.resumeData?.headerConfig;
  }
}
