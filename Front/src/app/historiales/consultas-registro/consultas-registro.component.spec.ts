import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasRegistroComponent } from './consultas-registro.component';

describe('ConsultasRegistroComponent', () => {
  let component: ConsultasRegistroComponent;
  let fixture: ComponentFixture<ConsultasRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
