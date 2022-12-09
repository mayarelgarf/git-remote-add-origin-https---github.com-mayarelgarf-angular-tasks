import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutcomponentComponent } from './checkoutcomponent.component';

describe('CheckoutcomponentComponent', () => {
  let component: CheckoutcomponentComponent;
  let fixture: ComponentFixture<CheckoutcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
