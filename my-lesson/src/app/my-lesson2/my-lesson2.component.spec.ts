import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLesson2Component } from './my-lesson2.component';

describe('MyLesson2Component', () => {
  let component: MyLesson2Component;
  let fixture: ComponentFixture<MyLesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLesson2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
