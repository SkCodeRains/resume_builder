import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextTransform } from '../../pipes/text-transform.pipe';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, TextTransform],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  isArray(option: any): boolean {
    return typeof option === 'string';
  }
  @Input() data: any;
}
