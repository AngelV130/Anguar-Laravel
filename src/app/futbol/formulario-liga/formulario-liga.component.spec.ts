import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLigaComponent } from './formulario-liga.component';

describe('FormularioLigaComponent', () => {
  let component: FormularioLigaComponent;
  let fixture: ComponentFixture<FormularioLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioLigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
