import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column-right',
  templateUrl: './column-right.component.html',
  styleUrls: ['./column-right.component.scss']
})
export class ColumnRightComponent {
  @Input() data: any;
}
