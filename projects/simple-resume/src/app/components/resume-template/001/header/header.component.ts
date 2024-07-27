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

  _links: any = input.required<any[]>();


  public get links() {
    return this._links();
  }
  public set links(value) {
    this._links = value;
  }
  get personalDetails() {
    return this._personalDetails();
  }
}
