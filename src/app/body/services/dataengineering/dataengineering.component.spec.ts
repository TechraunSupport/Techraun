import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataengineeringComponent } from './dataengineering.component';

describe('DataengineeringComponent', () => {
  let component: DataengineeringComponent;
  let fixture: ComponentFixture<DataengineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataengineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
