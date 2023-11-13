import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';
import { MyLesson2Component } from './my-lesson2/my-lesson2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewCompComponent, MyLesson2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Привет, мир';
  desc = 100;
  arr = [345, 7346, 324876]
}
