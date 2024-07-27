import { Component, inject } from '@angular/core';
import { DataService } from '../../../../data-services/data.service';

@Component({
  selector: 'app-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.scss'],
})
export class SideSectionComponent {

  dataService = inject(DataService);
  skills = this.dataService.skills;
  education = this.dataService.education;
  strength = this.dataService.strength;
  objective = this.dataService.objective
  getSkill(detailsArray: string) {
    return detailsArray.split(',');
  }
}
