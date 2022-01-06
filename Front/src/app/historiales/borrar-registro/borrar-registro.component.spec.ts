import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarRegistroComponent } from './borrar-registro.component';

describe('BorrarRegistroComponent', () => {
  let component: BorrarRegistroComponent;
  let fixture: ComponentFixture<BorrarRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
