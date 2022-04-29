import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockvendorComponent } from './viewstockvendor.component';

describe('ViewstockvendorComponent', () => {
  let component: ViewstockvendorComponent;
  let fixture: ComponentFixture<ViewstockvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstockvendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
