import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorformComponent } from './profesorform.component';

describe('ProfesorformComponent', () => {
  let component: ProfesorformComponent;
  let fixture: ComponentFixture<ProfesorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
