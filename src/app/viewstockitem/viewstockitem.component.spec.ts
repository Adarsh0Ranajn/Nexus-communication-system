import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockitemComponent } from './viewstockitem.component';

describe('ViewstockitemComponent', () => {
  let component: ViewstockitemComponent;
  let fixture: ComponentFixture<ViewstockitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstockitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
