import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerRegistrosComponent } from './obtener-registros.component';

describe('ObtenerRegistrosComponent', () => {
  let component: ObtenerRegistrosComponent;
  let fixture: ComponentFixture<ObtenerRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
