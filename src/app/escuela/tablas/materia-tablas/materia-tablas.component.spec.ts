import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaTablasComponent } from './materia-tablas.component';

describe('MateriaTablasComponent', () => {
  let component: MateriaTablasComponent;
  let fixture: ComponentFixture<MateriaTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaTablasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
