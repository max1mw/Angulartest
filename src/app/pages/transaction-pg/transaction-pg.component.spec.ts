import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPgComponent } from './transaction-pg.component';

describe('TransactionPgComponent', () => {
  let component: TransactionPgComponent;
  let fixture: ComponentFixture<TransactionPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
