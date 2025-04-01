import { Component, inject, input } from '@angular/core';
import { DataService } from '../../../../data-services/data.service';

@Component({
    selector: 'app-side-section',
    templateUrl: './side-section.component.html',
    styleUrls: ['./side-section.component.scss'],
    standalone: false
})
export class SideSectionComponent {

  dataService = inject(DataService);
  skills = this.dataService.skills;
  education = this.dataService.education;
  strength = this.dataService.strength;
  objective = this.dataService.objective
  profiles = this.dataService.profiles
  getSkill(detailsArray: string) {
    return detailsArray.split(',');
  }
}


@Component({
    selector: 'ButtonComponent',
    template: `
         <div class="d-flex flex-wrap border border-secondary mx-1 px-1 skill-btn">
                            <!-- @if($index){ -->
                            <!-- <span class="bullet center h3 m-0 p-0">&#8226;</span> -->
                            <!-- } -->
                            <span class="center">
                                {{text()}}
                            </span>
                        </div>
  `,
    styleUrls: ['./side-section.component.scss'],
    standalone: false
})
export class ButtonComponent {

  text = input<string>()

  dataService = inject(DataService);
  skills = this.dataService.skills;
  education = this.dataService.education;
  strength = this.dataService.strength;
  objective = this.dataService.objective
  profiles = this.dataService.profiles
  getSkill(detailsArray: string) {
    return detailsArray.split(',');
  }
}
