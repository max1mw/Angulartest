import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TesttablitzaComponent } from './testtablitza.component';

describe('TesttablitzaComponent', () => {
  let component: TesttablitzaComponent;
  let fixture: ComponentFixture<TesttablitzaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttablitzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesttablitzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
