import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatrimestreTablaComponent } from './cuatrimestre-tabla.component';

describe('CuatrimestreTablaComponent', () => {
  let component: CuatrimestreTablaComponent;
  let fixture: ComponentFixture<CuatrimestreTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuatrimestreTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuatrimestreTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
