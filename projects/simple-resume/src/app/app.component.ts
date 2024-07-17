import { AfterViewInit, Component } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule,HeaderComponent]
})
export class AppComponent implements AfterViewInit {
  title = 'simple-resume';


  ngAfterViewInit(): void {
  }
  print() {
    window.print();
  }
}
