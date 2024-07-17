import { Component, inject } from '@angular/core';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  router = inject(RouterService);

  createResume() {
    this.router.navigate("build-resume");
  }

}
