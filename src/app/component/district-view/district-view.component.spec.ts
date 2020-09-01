import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictViewComponent } from './district-view.component';

describe('DistrictViewComponent', () => {
  let component: DistrictViewComponent;
  let fixture: ComponentFixture<DistrictViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
