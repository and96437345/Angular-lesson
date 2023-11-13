import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from '../second/second.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-lesson2',
  standalone: true,
  imports: [CommonModule, SecondComponent, ReactiveFormsModule],
  templateUrl: './my-lesson2.component.html',
  styleUrl: './my-lesson2.component.scss'
})
export class MyLesson2Component {
  username = 'Andrey';
  isLogin = false;
  users = [
    { id:0, name:"Alex" },
    { id:1, name:"Tigran" },
    { id:2, name:"Anna" },
  ];
  greet(){
    alert(`Hello ${this.username}`);
  };
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),

  });
  submit(){
    alert(`${[this.profileForm.value.name]} и ${[this.profileForm.value.email]}`);
  }
}
