import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnkeyComponent } from './turnkey.component';

describe('TurnkeyComponent', () => {
  let component: TurnkeyComponent;
  let fixture: ComponentFixture<TurnkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnkeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
