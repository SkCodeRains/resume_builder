import { Directive, ElementRef, Inject, effect, input } from '@angular/core';

@Directive({
  selector: '[templateRenderer]',
  standalone: true
})
export class TemplateRendererDirective {


  outlet = input.required<HTMLDivElement>();

  constructor(private element: ElementRef) {
    effect(() => {
      if (this.element) {
        this.outlet().appendChild(this.element.nativeElement);
      }
    });
  }

}
