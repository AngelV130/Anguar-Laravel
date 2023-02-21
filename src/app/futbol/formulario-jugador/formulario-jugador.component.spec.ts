import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJugadorComponent } from './formulario-jugador.component';

describe('FormularioJugadorComponent', () => {
  let component: FormularioJugadorComponent;
  let fixture: ComponentFixture<FormularioJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioJugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
