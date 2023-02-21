import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoformComponent } from './alumnoform.component';

describe('AlumnoformComponent', () => {
  let component: AlumnoformComponent;
  let fixture: ComponentFixture<AlumnoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
