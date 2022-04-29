import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailshopsComponent } from './retailshops.component';

describe('RetailshopsComponent', () => {
  let component: RetailshopsComponent;
  let fixture: ComponentFixture<RetailshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
