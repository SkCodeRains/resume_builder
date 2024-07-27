import { Component, Input, input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextEditorComponent } from '../text-editor/text-editor.component';
import { IFormConfig, IFormField } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { TemplateRendererDirective } from 'common';

@Component({
  selector: 'app-dynamic-forms',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, TextEditorComponent, ReactiveFormsModule, CommonModule, TemplateRendererDirective],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.scss'
})
export class DynamicFormsComponent {


  currentConfig = input.required<IFormConfig>();

  get formFields(): IFormField[] {
    return this.currentConfig()?.formFields || [];
  }

  get form(): FormGroup | undefined {
    return this.currentConfig().form;
  }

  test = ""

  load() { }
}
