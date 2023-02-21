import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEquipoComponent } from './tabla-equipo.component';

describe('TablaEquipoComponent', () => {
  let component: TablaEquipoComponent;
  let fixture: ComponentFixture<TablaEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
