import { Routes } from '@angular/router';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResumeBuilderComponent } from './components/resume-builer/resume-builder.component';

export const routes: Routes = [
    { path: "", component: ResumeBuilderComponent },
    // { path: "", component: DashboardComponent },
    { path: "build-resume", component: ResumeBuilderComponent },
];
