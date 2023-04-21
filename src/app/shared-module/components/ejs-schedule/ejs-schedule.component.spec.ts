import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjsScheduleComponent } from './ejs-schedule.component';

describe('EjsScheduleComponent', () => {
  let component: EjsScheduleComponent;
  let fixture: ComponentFixture<EjsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjsScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
