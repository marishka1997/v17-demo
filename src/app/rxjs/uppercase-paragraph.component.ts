import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-uppercase-paragraph',
  standalone: true,
  imports: [UpperCasePipe],
  template: '<p>{{text | uppercase }}</p>',
})
export class UppercaseParagraphComponent {
  @Input({ required: true }) text!: string;
}
