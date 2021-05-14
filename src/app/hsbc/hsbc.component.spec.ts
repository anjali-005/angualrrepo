import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsbcComponent } from './hsbc.component';

describe('HsbcComponent', () => {
  let component: HsbcComponent;
  let fixture: ComponentFixture<HsbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
