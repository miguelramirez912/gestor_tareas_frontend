import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablesComponent } from './responsables.component';

describe('ResponsablesComponent', () => {
  let component: ResponsablesComponent;
  let fixture: ComponentFixture<ResponsablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsablesComponent]
    });
    fixture = TestBed.createComponent(ResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
