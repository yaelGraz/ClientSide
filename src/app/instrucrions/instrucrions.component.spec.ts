import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrucrionsComponent } from './instrucrions.component';

describe('InstrucrionsComponent', () => {
  let component: InstrucrionsComponent;
  let fixture: ComponentFixture<InstrucrionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrucrionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrucrionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
