import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallaNavalViewComponent } from './batalla-naval-view.component';

describe('BatallaNavalViewComponent', () => {
  let component: BatallaNavalViewComponent;
  let fixture: ComponentFixture<BatallaNavalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatallaNavalViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatallaNavalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
