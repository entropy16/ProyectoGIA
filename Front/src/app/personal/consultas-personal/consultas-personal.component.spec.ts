import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasPersonalComponent } from './consultas-personal.component';

describe('ConsultasPersonalComponent', () => {
  let component: ConsultasPersonalComponent;
  let fixture: ComponentFixture<ConsultasPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
