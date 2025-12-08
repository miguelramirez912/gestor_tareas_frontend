import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarTareaComponent } from './ingresar-tarea.component';

describe('IngresarTareaComponent', () => {
  let component: IngresarTareaComponent;
  let fixture: ComponentFixture<IngresarTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarTareaComponent]
    });
    fixture = TestBed.createComponent(IngresarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
