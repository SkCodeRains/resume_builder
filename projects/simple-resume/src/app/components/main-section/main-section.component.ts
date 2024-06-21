import { Component, inject } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent {

  dataService = inject(DataService)
  experiences = this.dataService.experiences;
  courses = this.dataService.courses;
  education = this.dataService.education;
  projects = this.dataService.projects;
  skills = this.dataService.skillsDetails;

}
