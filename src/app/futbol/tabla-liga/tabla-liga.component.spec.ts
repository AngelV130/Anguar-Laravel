import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaLigaComponent } from './tabla-liga.component';

describe('TablaLigaComponent', () => {
  let component: TablaLigaComponent;
  let fixture: ComponentFixture<TablaLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaLigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
