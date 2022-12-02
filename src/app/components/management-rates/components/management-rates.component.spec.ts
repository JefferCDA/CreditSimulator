import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRatesComponent } from './management-rates.component';

describe('ManagementRatesComponent', () => {
  let component: ManagementRatesComponent;
  let fixture: ComponentFixture<ManagementRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
