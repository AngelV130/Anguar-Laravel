import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJugadorComponent } from './tabla-jugador.component';

describe('TablaJugadorComponent', () => {
  let component: TablaJugadorComponent;
  let fixture: ComponentFixture<TablaJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaJugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
