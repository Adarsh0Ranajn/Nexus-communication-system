import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRetailShowroomComponent } from './admin-retail-showroom.component';

describe('AdminRetailShowroomComponent', () => {
  let component: AdminRetailShowroomComponent;
  let fixture: ComponentFixture<AdminRetailShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRetailShowroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRetailShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
