import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorTablaComponent } from './profesor-tabla.component';

describe('ProfesorTablaComponent', () => {
  let component: ProfesorTablaComponent;
  let fixture: ComponentFixture<ProfesorTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
