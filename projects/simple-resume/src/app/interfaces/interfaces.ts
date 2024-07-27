import { FormGroup } from "@angular/forms";

export interface IFormField {
    title: string;
    placeholder: string;
    type: 'text' | 'textarea' | 'dropdown';
    value?: string | Array<any>
}

export interface IFormConfig {
    form: FormGroup;
    formFields: IFormField[];
    reflectTo: any
}