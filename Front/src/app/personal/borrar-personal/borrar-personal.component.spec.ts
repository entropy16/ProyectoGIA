import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPersonalComponent } from './borrar-personal.component';

describe('BorrarPersonalComponent', () => {
  let component: BorrarPersonalComponent;
  let fixture: ComponentFixture<BorrarPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
