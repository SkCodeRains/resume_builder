/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from 'projects/ats-resume/src/app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
