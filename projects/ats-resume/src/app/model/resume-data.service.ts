
export class ResumeDataService {
  private _headerConfig: any;
  private _panels!: Array<any>;
  private _sidePanel!: Array<any>;
  private _summary!: Array<any>;


  constructor(data: { headerConfig: any, panels: Array<any>, sidePanel: Array<any> }) {
    ({ headerConfig: this.headerConfig, panels: this.panels, sidePanel: this.sidePanel } = data);
  }


  public get headerConfig(): any {
    return this._headerConfig;
  }
  public set headerConfig(value: any) {
    this._headerConfig = value;
  }
  public get panels(): Array<any> {
    return this._panels;
  }
  public set panels(value: Array<any>) {
    this._panels = value;
  }
  public get sidePanel(): Array<any> {
    return this._sidePanel;
  }
  public set sidePanel(value: Array<any>) {
    this._sidePanel = value;
  }
  public get summary(): Array<any> {
    return this._summary;
  }
  public set summary(value: Array<any>) {
    this._summary = value;
  }


}
