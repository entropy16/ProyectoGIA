import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerPersonalComponent } from './obtener-personal.component';

describe('ObtenerPersonalComponent', () => {
  let component: ObtenerPersonalComponent;
  let fixture: ComponentFixture<ObtenerPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
