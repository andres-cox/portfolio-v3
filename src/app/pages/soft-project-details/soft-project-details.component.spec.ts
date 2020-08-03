import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftProjectDetailsComponent } from './soft-project-details.component';

describe('SoftProjectDetailsComponent', () => {
  let component: SoftProjectDetailsComponent;
  let fixture: ComponentFixture<SoftProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
