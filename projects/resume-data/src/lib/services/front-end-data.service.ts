import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontEndDataService {

  constructor() { }

  private _summary = "";
  public get summary() {
    return this._summary;
  }
  public set summary(value) {
    this._summary = value;
  }

  private _skills = {};
  public get skills() {
    return this._skills;
  }
  public set skills(value) {
    this._skills = value;
  }

  private _experience = {};
  public get experience() {
    return this._experience;
  }
  public set experience(value) {
    this._experience = value;
  }
}
