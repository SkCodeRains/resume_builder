import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule, HeaderComponent]
})
export class AppComponent implements AfterViewInit {
  title = 'simple-resume';


  ngAfterViewInit(): void {
  }
  print() {
    window.print();
  }
}
