import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPendingComponent } from './product-list-pending.component';

describe('ProductListPendingComponent', () => {
  let component: ProductListPendingComponent;
  let fixture: ComponentFixture<ProductListPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
