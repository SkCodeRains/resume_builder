import { Component, inject } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  personalDetails = inject(DataService).personalDetails;
}
