import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApproveComponent } from './product-approve.component';

describe('ProductApproveComponent', () => {
  let component: ProductApproveComponent;
  let fixture: ComponentFixture<ProductApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
