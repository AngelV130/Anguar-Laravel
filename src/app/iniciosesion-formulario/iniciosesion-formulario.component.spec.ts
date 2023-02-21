import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosesionFormularioComponent } from './iniciosesion-formulario.component';

describe('IniciosesionFormularioComponent', () => {
  let component: IniciosesionFormularioComponent;
  let fixture: ComponentFixture<IniciosesionFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciosesionFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciosesionFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
