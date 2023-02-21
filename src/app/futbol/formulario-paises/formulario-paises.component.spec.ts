import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPaisesComponent } from './formulario-paises.component';

describe('FormularioPaisesComponent', () => {
  let component: FormularioPaisesComponent;
  let fixture: ComponentFixture<FormularioPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
