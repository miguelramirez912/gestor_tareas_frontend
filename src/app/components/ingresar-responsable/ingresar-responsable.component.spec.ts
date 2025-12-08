import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarResponsableComponent } from './ingresar-responsable.component';

describe('IngresarResponsableComponent', () => {
  let component: IngresarResponsableComponent;
  let fixture: ComponentFixture<IngresarResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarResponsableComponent]
    });
    fixture = TestBed.createComponent(IngresarResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
