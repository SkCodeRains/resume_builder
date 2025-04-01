import { Component, inject, input } from '@angular/core';
import { DataService } from '../../../../data-services/data.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-main-section',
    templateUrl: './main-section.component.html',
    styleUrls: ['./main-section.component.scss'],
    standalone: false
})
export class MainSectionComponent { 
  totalExp="3+ Years"
  dataService = inject(DataService)
  experiences = this.dataService.experiences;
  courses = this.dataService.courses;
  education = this.dataService.education;
  projects = this.dataService.projects;
  skills = this.dataService.skillsDetails;

}
