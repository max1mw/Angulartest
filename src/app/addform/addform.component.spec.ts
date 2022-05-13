import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddformComponent } from './addform.component';

describe('AddformComponent', () => {
  let component: AddformComponent;
  let fixture: ComponentFixture<AddformComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
