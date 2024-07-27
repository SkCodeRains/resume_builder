import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class ResumeHeaderComponent {
  _personalDetails = input.required<any>();
  form = input.required<FormGroup>();

  get personalDetails() {
    return this._personalDetails();
  }
}
