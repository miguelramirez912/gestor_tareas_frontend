import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarResponsableComponent } from './actualizar-responsable.component';

describe('ActualizarResponsableComponent', () => {
  let component: ActualizarResponsableComponent;
  let fixture: ComponentFixture<ActualizarResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarResponsableComponent]
    });
    fixture = TestBed.createComponent(ActualizarResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
