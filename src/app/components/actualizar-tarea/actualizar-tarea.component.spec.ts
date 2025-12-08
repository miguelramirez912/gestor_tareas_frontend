import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTareaComponent } from './actualizar-tarea.component';

describe('ActualizarTareaComponent', () => {
  let component: ActualizarTareaComponent;
  let fixture: ComponentFixture<ActualizarTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarTareaComponent]
    });
    fixture = TestBed.createComponent(ActualizarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
