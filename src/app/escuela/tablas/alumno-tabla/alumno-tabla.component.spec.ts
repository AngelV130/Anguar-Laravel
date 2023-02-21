import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoTablaComponent } from './alumno-tabla.component';

describe('AlumnoTablaComponent', () => {
  let component: AlumnoTablaComponent;
  let fixture: ComponentFixture<AlumnoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
