import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.scss'
})
export class NewCompComponent {
  title = 'Hello world'
  num = 514;
  dateObject: Date = new Date(2020, 1, 20);
  dateString = "2020-02-20";
  dateNumber = 1582156800000;
}
