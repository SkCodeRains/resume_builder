import { Component, WritableSignal, inject, signal } from '@angular/core';
import { ResumeViewerComponent } from '../resume-viewer/resume-viewer.component';
import { DataService } from '../../data-services/data.service';
import { DynamicFormsComponent } from '../dynamic-forms/dynamic-forms.component';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFormConfig, IFormField } from '../../interfaces/interfaces';
import { Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-resume-builder',
  standalone: true,
  imports: [ResumeViewerComponent, DynamicFormsComponent, MatIconModule, MatButtonModule],
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.scss'
})
export class ResumeBuilderComponent {


  private _currentConfig!: WritableSignal<IFormConfig>;

  public get currentConfig(): any {
    return this._currentConfig();
  }

  subscriptions = new Subscription();

  resumeData = inject(DataService);



  fb = inject(FormBuilder);

  config = signal(this.getConfig())


  constructor() {
    this.config().forEach((element: IFormConfig) => {
      element.form = this.fb.group(this.buildForm(element.formFields, element.reflectTo));
      for (const key in element.form.value) {
        let subs = element.form.controls[key].valueChanges.subscribe(val => {
          this.resumeData.personalDetails[key].set(val);
        });
        this.subscriptions.add(subs);
      }
    });
    this._currentConfig = signal(this.config()[0]);


  }


  buildForm(formFields: IFormField[], reflectTo: any): any {
    let form: any = {}
    for (const field of formFields) {
      form[field.title] = reflectTo[field.title]() || "";
    }
    return form;
  }

  getConfig(): IFormConfig[] {
    return [
      {
        formFields: [
          { title: "name", placeholder: "Enter Your Full Name", type: "text" },
          { title: "title", placeholder: "Enter Your Job Title", type: "text" },
          { title: "summary", placeholder: "Enter Your Summary", type: "textarea" },
        ],
        reflectTo: this.resumeData.personalDetails,
        form: this.fb.group({})
      }
    ]
  }
}
