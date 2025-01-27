import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddropComponent } from './carddrop.component';

describe('CarddropComponent', () => {
  let component: CarddropComponent;
  let fixture: ComponentFixture<CarddropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarddropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
