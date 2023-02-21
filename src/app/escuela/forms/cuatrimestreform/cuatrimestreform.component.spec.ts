import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatrimestreformComponent } from './cuatrimestreform.component';

describe('CuatrimestreformComponent', () => {
  let component: CuatrimestreformComponent;
  let fixture: ComponentFixture<CuatrimestreformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuatrimestreformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuatrimestreformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
