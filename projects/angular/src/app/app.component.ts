import { Component } from '@angular/core';
import { MainPanelComponent } from './component/main-panel/main-panel.component';
import { SidePanelComponent } from './component/side-panel/side-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MainPanelComponent, SidePanelComponent]
})
export class AppComponent {
  title = 'angular';
}
