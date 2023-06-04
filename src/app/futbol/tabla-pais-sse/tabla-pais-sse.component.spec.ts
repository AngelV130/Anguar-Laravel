import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPaisSseComponent } from './tabla-pais-sse.component';

describe('TablaPaisSseComponent', () => {
  let component: TablaPaisSseComponent;
  let fixture: ComponentFixture<TablaPaisSseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPaisSseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPaisSseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
