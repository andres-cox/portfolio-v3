import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecProjectDetailsComponent } from './elec-project-details.component';

describe('ElecProjectDetailsComponent', () => {
  let component: ElecProjectDetailsComponent;
  let fixture: ComponentFixture<ElecProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
